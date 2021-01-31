import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import About from "../components/about/about";
import Teams from "../components/about/teams/teams";
import Seo from "../components/seo";
import PreviousEditions from "../components/about/previousEditions/previousEditions";


const AboutPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allPreviousEditionsJson {
            edges {
              node {
                year
                website
              }
            }
        }
    }
  `);

    return (
        <Layout title="About">
            <Seo title="About" />
            <About />
            <Teams />
            <PreviousEditions editions={data.allPreviousEditionsJson} />
        </Layout>
    );
};

export default AboutPage;
