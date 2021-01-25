import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Speakers = () => (
    <Layout>
        <Seo title="Speakers" />
        <h1>Hi from the speakers page</h1>
        <p>Welcome to the speakers</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default Speakers;
