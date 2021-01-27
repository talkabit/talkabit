/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ImTicket } from 'react-icons/im';
import { IconContext } from "react-icons";

import Logo from "../images/Tab4v-02.inline.svg";

import Header from "./header";
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
			<Header navLinks={data.site.siteMetadata.navLinks} siteTitle={data.site.siteMetadata?.title || "Title"} Logo={Logo}/>
			<div className="main-container">
				<div className={styles.title}>
					<span>{title}</span>
				</div>
			</div>
			<Sponsors />
			<div className={styles.footer}>
				<div className={styles.footerContainer}>
					<IconContext.Provider value={{ color: 'white', size: '25px' }}>
						<div className={styles.iconContainer}>
							<ImTicket />
							<FaFacebook />
							<FaInstagram />
							<FaLinkedin />
						</div>
					</IconContext.Provider>
				</div>
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
