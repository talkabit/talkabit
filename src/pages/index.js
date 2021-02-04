import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Seo from "../components/seo";
import Social from "../components/social";
import Nav from "../components/nav";

import styles from "../styles/home.module.css";

import Background from "../images/background.png";
import Logo from "../images/logo-hd.png";

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
            <div style={{ flex: "1 0 auto" }}>
                <img src={Logo} alt="Logo" className={styles.logo}/>
                <h2 className={styles.date}>FEBRUARY 12 &amp; 13</h2>
                <h2 className={styles.title}>HOW SOCIETY IS BEING SHAPED BY TECHNOLOGY</h2>
                <div className={styles.social}>
                    <Social />
                </div>
            </div>
            <div className={styles.nav}>
                <Nav navLinks={data.site.siteMetadata.navLinks} className={styles.navLinks}/>
            </div>
            <p className={styles.copyright}>Copyright &copy; 2021 Talk a Bit. All rights reserved.</p>
        </div>
    );
};

export default IndexPage;
