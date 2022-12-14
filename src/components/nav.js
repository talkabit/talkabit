import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

import NavStyles from "../styles/navStyles.module.css";

const Nav = ({ navLinks, className }) => (
    <nav className={classnames(NavStyles.navContainer, className)}>
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
);

Nav.propTypes = {
    navLinks: PropTypes.array,
    className: PropTypes.string,
};

Nav.defaultProps = {
    siteTitle: "",
};

export default Nav;
