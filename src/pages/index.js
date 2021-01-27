import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import Seo from "../components/seo";
import CalendarExport from "../components/home/CalendarExport";
import Sponsors from "../components/sponsor/sponsors";
import Schedule from "../components/schedule/Schedule";

const IndexPage = () => {
    const message = useStaticQuery(graphql`
    query MyQuery {
      dataJson {
        message
      }
    }
  `);

    return (
        <Layout title="Schedule">
            <Seo title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <p>
                <em>
                    {message.dataJson.message}
                </em>
            </p>
            <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
                <Image />
            </div>
            <CalendarExport/>
            <Link to="/page-2/">Go to page 2</Link>
            {" "}
            <br />
            <Sponsors />
            <Schedule />
        </Layout>
    );
};

export default IndexPage;
