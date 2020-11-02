import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import MinActivity from "../components/minActivity";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Activities = () => {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data/events/"}, frontmatter: {type: {ne: "default"}}}, 
                                  sort: { fields: frontmatter___type }) {
        group(field: frontmatter___type) {
          edges {
            node {
                html
                frontmatter {
                  title
                  type
                  date(formatString: "D MMMM", locale: "en-US")
                  startTime
                  endTime
                  speakers {
                    name
                    role
                    occupations {
                      what
                      where
                    }
                    bio
                    img {
                      childImageSharp {
                        fluid(maxWidth: 400, maxHeight: 250) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    linkedin
                  }
                }
                fields {
                    slug
                }
            }
          }

        }
      }
    }
      `);

    const categories = [...new Set(data.allMarkdownRemark.group.map((group) => group.edges[0].node.frontmatter.type))];

    return (
        <Layout>
            <Seo title="Activities" />
            <h2>Activities</h2>

            {categories.map((cat, index) => (
                <div key={cat}>
                    <h3>
                        {cat}
                    </h3>
                    {data.allMarkdownRemark.group[index].edges.map((edge) => {
                        let activityProps;
                        if (edge.node.fields !== null) {
                            activityProps = { ...edge.node.frontmatter, html: edge.node.html, slug: edge.node.fields.slug };
                        } else
                            activityProps = { ...edge.node.frontmatter, html: edge.node.html };
                        return <MinActivity key={edge.node.frontmatter.title} {...activityProps} />;
                    })}
                </div>
            ))}
        </Layout>
    );
};

export default Activities;
