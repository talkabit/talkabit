import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Event, { PromotedEvent } from "./Event";

import styles from "./schedule.module.css";

const DaySchedule = ({ align = "left", eventNodes, promotedEventNodes, date }) => (
    <div>
        <h3>
            {date}
        </h3>
        {align === "left" ?
            (
                <div className={styles.daySchedule}>
                    <div className={styles.dayScheduleLeft}>
                        {eventNodes.map(({ node }) => (
                            <Event
                                key={node.frontmatter.title}
                                {...node.frontmatter}
                                {...node.fields}
                                showPicture={node.frontmatter.type !== "panel"}
                            />
                        ))}
                    </div>
                    <div className={styles.dayScheduleRight}>
                        {promotedEventNodes.map(({ node }) => (
                            <PromotedEvent
                                key={node.frontmatter.title}
                                {...node.frontmatter}
                                {...node.fields}
                                showPicture={node.frontmatter.type !== "panel"}
                            />
                        ))}
                    </div>
                </div>
            )
            :
            (
                <div className={styles.daySchedule}>
                    <div className={styles.dayScheduleLeft}>
                        {promotedEventNodes.map(({ node }) => (
                            <Event
                                key={node.frontmatter.title}
                                {...node.frontmatter}
                                {...node.fields}
                                showPicture={node.frontmatter.type !== "panel"}
                            />
                        ))}
                    </div>
                    <div className={styles.dayScheduleRight}>
                        {eventNodes.map(({ node }) => (
                            <Event
                                key={node.frontmatter.title}
                                {...node.frontmatter}
                                {...node.fields}
                                showPicture={node.frontmatter.type !== "panel"}
                            />
                        ))}
                    </div>
                </div>
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

    return (
        <div>
            <h2>Schedule</h2>
            {data.allMarkdownRemark.group.map((group, i) => (
                <DaySchedule
                    key={group.fieldValue}
                    align={i % 2 === 0 ? "left" : "right"}
                    eventNodes={group.edges.filter(({ node }) => !node.frontmatter.promoted)}
                    promotedEventNodes={group.edges.filter(({ node }) => node.frontmatter.promoted)}
                    date={group.edges[0].node.frontmatter.date}
                />
                // <div key={group.fieldValue}>
                //     <h3>
                //         {group.edges[0].node.frontmatter.date}
                //     </h3>
                //     <div>
                //         {group.edges
                //             .filter(({ node }) => !node.frontmatter.promoted)
                //             .map(({ node }) => (
                //                 <Event
                //                     key={node.frontmatter.title}
                //                     {...node.frontmatter}
                //                     {...node.fields}
                //                     showPicture={node.frontmatter.type !== "panel"}
                //                 />
                //             ))}
                //         each of these should be done in a component that receives a left or right prop to align stuffs
                //         {group.edges
                //             .filter(({ node }) => node.frontmatter.promoted)
                //             .map(({ node }) => (
                //                 <Event
                //                     key={node.frontmatter.title}
                //                     {...node.frontmatter}
                //                     {...node.fields}
                //                     showPicture={node.frontmatter.type !== "panel"}
                //                 />
                //             ))}
                //     </div>
                // </div>

            ))}
        </div>
    );
};

export default Schedule;
