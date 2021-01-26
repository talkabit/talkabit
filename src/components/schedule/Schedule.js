import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Event from "./Event";


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
            {data.allMarkdownRemark.group.map((group) => (
                <div key={group.fieldValue}>
                    <h3>
                        {group.edges[0].node.frontmatter.date}
                    </h3>
                    <div>
                        {group.edges.map(({ node }) => (
                            <Event
                                key={node.frontmatter.title}
                                {...node.frontmatter}
                                {...node.fields}
                                showPicture={node.frontmatter.type !== "panel"}
                            />
                        ))}
                    </div>
                </div>

            ))}
        </div>
    );
};

export default Schedule;
