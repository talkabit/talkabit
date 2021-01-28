import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImTicket } from "react-icons/im";
import { IconContext } from "react-icons";


import styles from "../styles/social.module.css";

const Social = () => (
    <IconContext.Provider value={{ color: "white", size: "50px" }}>
        <div className={styles.iconContainer}>
            <a href="/" style={{ color: "white", textDecoration: "none" }}>
                <ImTicket />
            </a>
            <a href="https://www.facebook.com/talkabit" style={{ color: "white", textDecoration: "none" }}>
                <FaFacebook />
            </a>
            <a href="https://www.instagram.com/talkabit/" style={{ color: "white", textDecoration: "none" }}>
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/talkabit/" style={{ color: "white", textDecoration: "none" }}>
                <FaLinkedin />
            </a>
        </div>
    </IconContext.Provider>
);

export default Social;
