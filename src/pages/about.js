import React from "react";

import Layout from "../components/layout";
import About from "../components/about/about";
import Teams from "../components/about/teams/teams";
import Seo from "../components/seo";

const AboutPage = () => (
    <Layout>
        <Seo title="About" />
        <About />
        <Teams />
    </Layout>
);

export default AboutPage;
