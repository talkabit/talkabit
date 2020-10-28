import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Sponsor from "./sponsor";

const Sponsors = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sponsors/" } }) {
        edges {
          node {
            frontmatter {
              gold {
                name
                img {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              silver {
                name
                img {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              bronze {
                name
                img {
                  childImageSharp {
                    fluid(maxWidth: 400) {
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
  `);

    return (
        <div>
            <h2>Sponsors</h2>
            {data.allMarkdownRemark.edges.length !== 1 ? (
                <h5>No sponsors to be displayed!</h5>
            ) : (
                <div>
                    {Object.keys(data.allMarkdownRemark.edges[0].node.frontmatter).map(
                        (key) => (
                            <div key={key}>
                                <h3 style={{ textTransform: "capitalize" }}>
                                    {key}
                                </h3>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    {data.allMarkdownRemark.edges[0].node.frontmatter[key].map(
                                        (sponsor) => (
                                            <Sponsor key={sponsor.name} {...sponsor} />
                                        )
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default Sponsors;
