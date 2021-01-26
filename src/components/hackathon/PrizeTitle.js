import React from "react";
import PropTypes from "prop-types";

import styles from "../../styles/hackathon.module.css";

const PrizeTitle = ({ title }) => (
    <div className={styles.titleContainer}>
        <h3 className={styles.title}>
            {title}
        </h3>
    </div>
);

PrizeTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PrizeTitle;
