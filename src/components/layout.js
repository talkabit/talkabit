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
import Title from "./common/Title";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/layout.module.css";
import { Container } from "react-bootstrap";

const Layout = ({ children, title, showHeader = true }) => {
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
            {showHeader && <Header navLinks={data.site.siteMetadata.navLinks} />}
            <Container className={styles.container}>
                <Title title={title} />
                <main>
                    {children}
                </main>
            </Container>
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
    showHeader: PropTypes.bool,
};

export default Layout;
