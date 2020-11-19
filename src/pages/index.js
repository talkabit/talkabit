import React from "react";

import styles from "../styles/coming-soon.module.css";

import Seo from "../components/seo";

import img from "../images/coming-soon.png";

import AddToCalendarHOC from "react-add-to-calendar-hoc";
import PropTypes from "prop-types";

const ComingSoon = () => {

    const event = {
        description: "A student-organized interactive online experience, free for everyone. FEB 12 & 13, from 14:00 to 18:00",
        duration: "",
        endDatetime: "20210213T240000Z",
        location: "Online",
        startDatetime: "20210212T000000Z",
        title: "Talk a Bit 2021",
    };

    const Button = ({ children, onClick }) => (
        <button onClick={onClick}>
            {children}
        </button>
    );

    Button.propTypes = {
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    const Modal = ({ children }) => (
        <div className={styles.link_container}>
            {children}
        </div>

    );

    Modal.propTypes = {
        children: PropTypes.node.isRequired,
    };

    const AddToCalendarModal = AddToCalendarHOC(Button, Modal);

    return (
        <div className={styles.container}>
            <Seo title="Coming Soon" />
            <div className={styles.text_container}>
                <h2 className={styles.event}>Talk a Bit 2021</h2>
                <div className={styles.dates}>
                    <h3 className={styles.text}>FEB 12 & 13</h3>
                    <AddToCalendarModal
                        className={styles.button}
                        linkProps={{
                            className: styles.link,
                        }}
                        event={event}
                    />
                </div>
                <h2 className={styles.slogan}>Let&#39;s talk a bit about technology.</h2>
                <h4 className={styles.description}>
                    A student-organized interactive online experience, free for everyone.&nbsp;
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
};

export default ComingSoon;
