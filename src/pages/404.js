import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import styles from "../styles/404.module.css";

const NotFoundPage = () => (
    <Layout title="Not found">
        <Seo title="404: Not found" />
        <p className={styles.text}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
);

export default NotFoundPage;
