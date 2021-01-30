import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Speaker from "../components/speaker/speaker";

const Speakers = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data/events/"}, frontmatter: {type: {ne: "default"}}}, sort: {fields: frontmatter___type}) {
            edges {
              node {
                frontmatter {
                  speakers {
                    name
                    bio
                    img {
                        childImageSharp {
                            fluid(maxWidth: 100, maxHeight: 100) {
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
    let count = 0;
    
    return (
        <Layout title="Speakers">
            <Seo title="Speakers" />
            
            {data.allMarkdownRemark.edges.map((list, index) => (
                list.node.frontmatter.speakers.map((edge) => {
                    return <Speaker key={edge.name} {...edge} even={count++ % 2 === 0} />;
                })
            ))}
        </Layout>
    );
}

export default Speakers;
