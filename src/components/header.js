import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Logo from "../images/Tab4v-02.inline.svg";
import NavStyles from "../styles/navStyles.module.css";

const Header = ({ navLinks, siteTitle }) => (
    <header className="header">
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "0 auto",
                maxWidth: 960,
                padding: "1.45rem 1.0875rem",
            }}
        >
            <div className="svg-container">
                <Logo />
            </div>
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: "white",
                        textDecoration: "none",
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
        <div className={NavStyles.navbarContainer}>
            <nav>
                <ul style={{ display: "flex", flex: 1 }}>
                    {navLinks.map(link => (
                        <div className={NavStyles.navItem}>
                            <li
                                key={link.name}
                                style={{
                                    listStyleType: `none`,
                                    padding: `1rem`,
                                }}
                            >
                                <Link style={{ color: `white` }} to={link.link}>
                                    {link.name}
                                </Link>
                            </li>
                        </div>

                    ))}
                </ul>
            </nav>
        </div>

    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: "",
};

export default Header;
