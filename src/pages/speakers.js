import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Speaker from "../components/speaker/speaker";

import styles from "../styles/speakers.module.css";

const Speakers = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/data/events/" }
          frontmatter: { type: { eq: "talk" } }
        }
        sort: { fields: [frontmatter___date, frontmatter___startTime] }
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "D MMM", locale: "en-US")
              startTime
              speakers {
                name
                bio
                img {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 400) {
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
        <Layout title="Speakers">
            <Seo title="Speakers" />
            <ul className={styles.speakers}>
                {data.allMarkdownRemark.edges.map((list) =>
                    list.node.frontmatter.speakers.map((edge) => (
                        <li key={edge.name} className={styles.item}>
                            <Speaker {...edge} startTime={list.node.frontmatter.startTime} date={list.node.frontmatter.date} />
                        </li>
                    ))
                )}
            </ul>
        </Layout>
    );
};

export default Speakers;
