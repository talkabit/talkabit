import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
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
            <a href="https://twitter.com/talkabitconf/" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noreferrer">
                <FaTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UCozp1TXwZcWVdHtgcn3mh8A" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noreferrer">
                <FaYoutube />
            </a>
        </div>
    </IconContext.Provider>
);

export default Social;
