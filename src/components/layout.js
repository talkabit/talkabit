/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Social from "./social";
import Sponsors from "./sponsor/sponsors";


import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/layout.module.css";
import { Container } from "react-bootstrap";

const Layout = ({ children, title }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
        <div className={styles.layout}>
            <Header navLinks={data.site.siteMetadata.navLinks} />
            <Container className={styles.container}>
                <div className={styles.title}>
                    <span>
                        {title}
                    </span>
                </div>
                <main>
                    {children}
                </main>
            </Container>
            {/* <Sponsors /> */}
            <div className={styles.footer}>
                <div className={styles.footerContainer}>
                    <Social />
                </div>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};

export default Layout;
