import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import NavStyles from "../styles/navStyles.module.css";

const Nav = ({ navLinks }) => (
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
    );

Nav.propTypes = {
    siteTitle: PropTypes.string,
    navLinks: PropTypes.array,
};

Nav.defaultProps = {
    siteTitle: "",
};

export default Nav;