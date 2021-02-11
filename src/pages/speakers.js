import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Title from "../components/common/Title";
import SpeakerList from "../components/speaker/SpeakerList";

const Speakers = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/data/events/" }
          frontmatter: { type: { regex: "/talk|panel/" } }
        }
        sort: { fields: [frontmatter___date, frontmatter___startTime] }
      ) {
        edges {
          node {
            frontmatter {
              type
              date(formatString: "D MMM", locale: "en-US")
              startTime
              speakers {
                name
                bio
                role
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
            <SpeakerList
                list={data.allMarkdownRemark.edges
                    .filter(({ node }) => node.frontmatter.type === "talk")}
            />
            <Title title="Panelists"/>
            <SpeakerList
                list={data.allMarkdownRemark.edges
                    .filter(({ node }) => node.frontmatter.type === "panel")}
            />
        </Layout>
    );
};

export default Speakers;
