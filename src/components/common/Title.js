import React from "react";
import PropTypes from "prop-types";

import styles from "../../styles/common.module.css";

const Title = ({ title }) => (
    <div className={styles.titleContainer}>
        <h1>
            {title}
        </h1>
    </div>
);

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
