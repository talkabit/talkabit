import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ImTicket } from 'react-icons/im';
import { IconContext } from "react-icons";

import { Link } from "gatsby";

import styles from "../styles/social.module.css";

const Social = () => (
    <IconContext.Provider value={{ color: 'white', size: '25px' }}>
        <div className={styles.iconContainer}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                <ImTicket />
            </Link>
            <Link to="https://www.facebook.com/talkabit" style={{ color: "white", textDecoration: "none" }}>
                <FaFacebook />
            </Link>
            <Link to="https://www.instagram.com/talkabit/" style={{ color: "white", textDecoration: "none" }}>
                <FaInstagram />
            </Link>
            <Link to="https://www.linkedin.com/company/talkabit/" style={{ color: "white", textDecoration: "none" }}>
                <FaLinkedin />
            </Link>
        </div>
    </IconContext.Provider>
);

export default Social;