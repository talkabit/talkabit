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
import Seo from "./seo";
import Sponsors from "./sponsor/sponsors";


import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/layout.module.css";
//import "./layout.css";

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
			{console.log(document.body.scrollTop)}
			<Header navLinks={data.site.siteMetadata.navLinks} siteTitle={data.site.siteMetadata?.title || "Title"}/>
			<div className="main-container">
				<div className={styles.title}>
					<span>{title}</span>
				</div>
				<main>
                    {children}
                </main>
			</div>
			<Sponsors />
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
};

export default Layout;
