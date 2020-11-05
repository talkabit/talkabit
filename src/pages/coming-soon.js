import React from "react";

import styles from "../styles/coming-soon.module.css"

import Seo from "../components/seo";

import img from "../images/coming_soon.png"


const ComingSoon = () => {

    let event = {
        title: 'Talk a Bit 2021',
        description: '',
        location: 'Online',
        startTime: '2021-02-12',
        endTime: '2021-02-13'
    }

    let icon = { textOnly: 'none' };

    return (
        <div className={styles.container}>
            <Seo title="Coming Soon" />
            <div className={styles.text_container}>
                <h2 className={styles.event}>Talk a Bit 2021</h2>
                <div className={styles.dates}>
                    <h3 className={styles.text}>FEB 12 & 13</h3>
                    <a className={styles.link} target="_blank" href="https://calendar.google.com/calendar/u/0/r/eventedit?dates=20210212T000000Z/20210213T000000Z&location=Online&text=Talk+a+Bit+2021&details">
                    <p className={styles.button}>
                        Add to calendar
                    </p>
                    </a>
                </div>
                <h2 className={styles.slogan}>Let's talk a bit about technology.</h2>
                <h4 className={styles.description}>A student-organized interactive online experience, free for everyone. <strong>More details soon.</strong></h4>
                <p className={styles.contact}>Contact us at <a className={styles.email} href="mailto:geral@talkabit.org">geral@talkabit.org</a></p>
                <a className={styles.editions} href="www.google.com">Check out last year's edition here.</a>
            </div>
            <div className={styles.img_container}>
                <img className={styles.img} src={img} />
            </div>
        </div>
    );
}

export default ComingSoon;
