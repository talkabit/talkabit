import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Hackathon = () => (
    <Layout>
        <Seo title="Hackathon" />
        <h1>Hi from the hackathon page</h1>
        <p>Welcome to the hackathon</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default Hackathon;
