import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Seo from "../components/seo";
import Social from "../components/social";
import Nav from "../components/nav";

import styles from "../styles/home.module.css";

import Background from "../images/background.png";
import Logo from "../images/logo-hd.png";
import Schedule from "../components/schedule/Schedule";
import Layout from "../components/layout";

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
        <>
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

            <Layout title="Schedule" showHeader={false}>
                <Seo title="Schedule" />
                <Schedule />
            </Layout>
        </>
    );
};

export default IndexPage;
