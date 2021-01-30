import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { useViewport } from "../utils/viewport";
import Event, { PromotedEvent } from "./Event";

import styles from "./schedule.module.css";

const MOBILE_BREAKPOINT_PX = 600;

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
                                // html={node.html}
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
                                // html={node.html}
                                showPicture={node.frontmatter.type !== "panel"}
                            />
                        ))}
                    </div>
                </>
            )
        }
    </div>
);

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

    const isMobile = useViewport().width < MOBILE_BREAKPOINT_PX;

    return (
        <div>
            <h2>Schedule</h2>
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

export default Schedule;
