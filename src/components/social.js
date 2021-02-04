import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImTicket } from "react-icons/im";
import { IconContext } from "react-icons";


import styles from "../styles/social.module.css";

const Social = () => (
    <IconContext.Provider value={{ color: "white", size: "50px" }}>
        <div className={styles.iconContainer}>
            <a href="https://www.eventbrite.com/e/talk-a-bit-2021-tickets-138847672125" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noreferrer">
                <ImTicket />
            </a>
            <a href="https://www.facebook.com/talkabit" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noreferrer">
                <FaFacebook />
            </a>
            <a href="https://www.instagram.com/talkabit/" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noreferrer">
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/talkabit/" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
        </div>
    </IconContext.Provider>
);

export default Social;
