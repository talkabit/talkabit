import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Logo from "../images/Tab4v-02.inline.svg";

const Header = ({ siteTitle }) => (
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
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: "",
};

export default Header;
