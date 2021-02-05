import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import Event, { PromotedEvent } from "./Event";

import styles from "./schedule.module.css";

const MOBILE_BREAKPOINT_PX = 600;

/** ************************************* */
// This is needed due to the build being executed in the server side, with no browser variables access
// such as `window`. This will mock the utils that use the window object
// When it is undefined, to let the build continue
const _IS_RUNNING_ON_BROWSER = typeof window !== "undefined";

// eslint-disable-next-line react/prop-types
const DummyViewportProvider = ({ children }) => (
    <>
        {children}
    </>
);
const viewportUtils = _IS_RUNNING_ON_BROWSER ? require("../utils/viewport")
    : {
        useViewport: () => ({ width: 1920, height: 1080 }),
        ViewportProvider: DummyViewportProvider,
    };

/** ************************************** */


const DaySchedule = ({ align = "left", eventNodes, promotedEventNodes, date, mobile }) => (
    <div className={styles.daySchedule}>
        <div className={`${styles.dayScheduleDate} ${styles[`dayScheduleDate_${align}`]}`}>
            <div className={styles.dayTitle}>
                <p>
                    {`${date}`}
                </p>
            </div>
        </div>
        {align === "left" ?
            (
                <>
                    <div className={`${styles.dayScheduleLeft} ${styles.leftAlign}`}>
                        {eventNodes.map(({ node }) => (
                            <Event
                                key={node.frontmatter.title}
                                {...node.frontmatter}
                                {...node.fields}
                                showPicture={node.frontmatter.type !== "panel"}
                            />
                        ))}
                    </div>
                    {!mobile &&
                    <div className={`${styles.dayScheduleRight} ${styles.promotedSection}`}>
                        {promotedEventNodes.map(({ node }) => (
                            <PromotedEvent
                                key={node.frontmatter.title}
                                {...node.frontmatter}
                                {...node.fields}
                                showPicture={node.frontmatter.type !== "panel"}
                            />
                        ))}
                    </div>
                    }
                </>
            )
            :
            (
                <>
                    {!mobile &&
                    <div className={`${styles.dayScheduleLeft} ${styles.promotedSection}`}>
                        {promotedEventNodes.map(({ node }) => (
                            <PromotedEvent
                                key={node.frontmatter.title}
                                {...node.frontmatter}
                                {...node.fields}
                                showPicture={node.frontmatter.type !== "panel"}
                            />
                        ))}
                    </div>
                    }
                    <div className={`${styles.dayScheduleRight} ${styles.rightAlign}`}>
                        {eventNodes.map(({ node }) => (
                            <Event
                                key={node.frontmatter.title}
                                {...node.frontmatter}
                                {...node.fields}
                                showPicture={node.frontmatter.type !== "panel"}
                            />
                        ))}
                    </div>
                </>
            )
        }
    </div>
);

DaySchedule.propTypes = {
    align: PropTypes.oneOf(["left", "right"]),
    eventNodes: PropTypes.array.isRequired,
    promotedEventNodes: PropTypes.array,
    date: PropTypes.string.isRequired,
    mobile: PropTypes.bool.isRequired,
};

const Schedule = () => {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/data/events/" } }
        sort: { fields: frontmatter___startTime }
      ) {
        group(field: frontmatter___date) {
          fieldValue
          edges {
            node {
              html
              fields {
                slug
              }
              frontmatter {
                title
                type
                date(formatString: "D MMMM", locale: "en-US")
                startTime
                endTime
                promoted
                tickets
                speakers {
                  name
                  occupations {
                    what
                    where
                  }
                  img {
                    childImageSharp {
                      fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

    const isMobile = viewportUtils.useViewport().width < MOBILE_BREAKPOINT_PX;

    return (
        <div className={styles.schedule}>
            {data.allMarkdownRemark.group.map((group, i) => (
                <DaySchedule
                    key={group.fieldValue}
                    align={i % 2 === 0 ? "left" : "right"}
                    mobile={isMobile}
                    eventNodes={group.edges.filter(({ node }) => isMobile || !node.frontmatter.promoted)}
                    promotedEventNodes={group.edges.filter(({ node }) => node.frontmatter.promoted)}
                    date={group.edges[0].node.frontmatter.date}
                />
            ))}
        </div>
    );
};

const ResponsiveSchedule = (props) => (

    <viewportUtils.ViewportProvider>
        <Schedule {...props}/>
    </viewportUtils.ViewportProvider>

);

export default ResponsiveSchedule;
