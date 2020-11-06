import React from "react";

import styles from "../styles/coming-soon.module.css";

import Seo from "../components/seo";

import img from "../images/coming_soon.png";


const ComingSoon = () => (
    <div className={styles.container}>
        <Seo title="Coming Soon" />
        <div className={styles.text_container}>
            <h2 className={styles.event}>Talk a Bit 2021</h2>
            <div className={styles.dates}>
                <h3 className={styles.text}>FEB 12 & 13</h3>
                <a
                    className={styles.link}
                    rel="noreferrer"
                    target="_blank"
                    href="https://tinyurl.com/y6ngkqfe"
                >
                    <p className={styles.button}>
                        Add to calendar
                    </p>
                </a>
            </div>
            <h2 className={styles.slogan}>Let&#39;s talk a bit about technology.</h2>
            <h4 className={styles.description}>
                A student-organized interactive online experience, free for everyone.
                <strong>More details soon.</strong>
            </h4>
            <p className={styles.contact}>
                Contact us at&nbsp;
                <a className={styles.email} href="mailto:geral@talkabit.org">geral@talkabit.org</a>
            </p>
            <a className={styles.editions} href="https://talkabit.org/2020/">Check out last year&#39;s edition here.</a>
        </div>
        <div className={styles.img_container}>
            <img className={styles.img} src={img} />
        </div>
    </div>
);

export default ComingSoon;
