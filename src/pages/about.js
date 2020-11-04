import React from "react";

import Layout from "../components/layout";
import About from "../components/about/about";
import Teams from "../components/about/teams/teams";

const AboutPage = () => (
    <Layout>
        <About />
        <Teams />
    </Layout>
);

export default AboutPage;
