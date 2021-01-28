import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// import Layout from "../components/layout";
// import Image from "../components/image";
import Seo from "../components/seo";
import Social from "../components/social";
import Nav from "../components/nav";
// import CalendarExport from "../components/home/CalendarExport";
// import Sponsors from "../components/sponsor/sponsors";
// import Schedule from "../components/schedule/Schedule";

import styles from "../styles/home.module.css";

import Background from "../images/background.png";
import Logo from "../images/logo.png";

const IndexPage = () => {

    const data = useStaticQuery(graphql`
    query NavLinksQuery {
      site {
        siteMetadata {
          title
          navLinks {
            name
            link
          }
        }
      }
    }
  `);

    return (
        <div
            className={styles.home} style={{
                backgroundImage: `url(${Background})`,
            }}
        >
            <Seo title="Home" />
            {/* <Logo className={styles.logo}></Logo> */}
            <img src={Logo} alt="Logo" className={styles.logo}/>
            <h2 className={styles.date}>FEBRUARY 12 & 13</h2>
            <h2 className={styles.title}>HOW SOCIETY IS BEING SHAPED BY TECHNOLOGY</h2>
            <div className={styles.social}>
                <Social />
            </div>
            <div className={styles.footer} />
            <div className={styles.nav}>
                <Nav navLinks={data.site.siteMetadata.navLinks} />
            </div>
        </div>
    // <Layout title="Schedule">
    //     <Seo title="Home" />
    //     <h1>Hi people</h1>
    //     <p>Welcome to your new Gatsby site.</p>
    //     <p>Now go build something great.</p>
    //     <p>
    //         <em>
    //             {message.dataJson.message}
    //         </em>
    //     </p>
    //     <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
    //         <Image />
    //     </div>
    //     <CalendarExport/>
    //     <Link to="/page-2/">Go to page 2</Link>
    //     {" "}
    //     <br />
    //     <Sponsors />
    //     <Schedule />
    // </Layout>
    );
};

export default IndexPage;
