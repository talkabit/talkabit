import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import NavStyles from "../styles/navStyles.module.css";

const Header = ({ navLinks, siteTitle, Logo }) => (
    <header className="header">
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "0 auto",
                maxWidth: 960,
                // padding: "1.45rem 1.0875rem",
            }}
        >
            <div className={NavStyles.logo}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                    <Logo />
                </Link>
            </div>
            {/* <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: "white",
                        textDecoration: "none",
                    }}
                >
                    {siteTitle}
                </Link>
            </h1> */}
        </div>
        <nav className={NavStyles.navContainer}>
            <ul className={NavStyles.nav}>
                {navLinks.map((link) => (
                    <li
                        key={link.name}
                        className={NavStyles.navItem}
                    >
                        <Link className={NavStyles.navItemLink} to={link.link} activeStyle={{ color: "#17a1c6" }}>
                            {link.name}
                        </Link>
                    </li>

                ))}
            </ul>
        </nav>
    </header >
);

Header.propTypes = {
    siteTitle: PropTypes.string,
    navLinks: PropTypes.array,
};

Header.defaultProps = {
    siteTitle: "",
};

export default Header;
