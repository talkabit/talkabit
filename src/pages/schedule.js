import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Schedule from "../components/schedule/Schedule";

const Activities = () => (
    <Layout title="Schedule">
        <Seo title="Schedule" />
        <Schedule />
    </Layout>
);

export default Activities;
