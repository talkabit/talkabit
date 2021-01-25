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

import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

const Layout = ({ children }) => {
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
        <>
            <Header navLinks={data.site.siteMetadata.navLinks} siteTitle={data.site.siteMetadata?.title || "Title"} />
            <div
                className="main-container"
            >
                <main>
                    {children}
                </main>
                <footer
                    style={{
                        marginTop: "2rem",
                    }}
                >
                    ©
                    {" "}
                    {new Date().getFullYear()}
                    , Built with
                    {" "}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
