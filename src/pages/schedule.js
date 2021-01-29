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
          fieldValue

        }
      }
    }
      `);

    return (
        <Layout title="Schedule">
            <Seo title="Schedule" />
            <h2>Activities</h2>

            {data.allMarkdownRemark.group.map((category) => (
                <div key={category.fieldValue}>
                    <h3>
                        {category.fieldValue}
                    </h3>
                    {category.edges.map((edge) => {
                        const activityProps = { ...edge.node.frontmatter, html: edge.node.html, slug: edge.node.fields.slug };
                        return <MinActivity key={edge.node.frontmatter.title} {...activityProps} />;
                    })}
                </div>
            ))}
        </Layout>
    );
};

export default Activities;
