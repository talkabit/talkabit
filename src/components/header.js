import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Nav from "./nav";
import Logo from "../images/logo.png";
import NavStyles from "../styles/navStyles.module.css";

const Header = ({ navLinks }) =>
// const [offset, setOffset] = useState(0);

// useEffect(() => {
//     window.onscroll = () => {
//         setOffset(window.pageYOffset)
//     }
// }, []);

    (
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
                        {/* <Logo /> */}
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
            </div>
            <Nav navLinks={navLinks}/>
            {/* <nav className={NavStyles.navContainer}>
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
            </nav> */}
        </header >
    )
;

Header.propTypes = {
    navLinks: PropTypes.array,
};

export default Header;
