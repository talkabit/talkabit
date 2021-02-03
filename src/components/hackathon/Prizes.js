import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Prize from "./Prize";
import { PrizeShape } from "../../utils/props";

import styles from "../../styles/hackathon.module.css";

const Prizes = ({ prizes }) => (
    <ul className={styles.prizes}>
        {prizes.map((prize) => (
            <li
                key={prize.tier}
                className={classnames(styles.item, styles[`item${prize.tier}`])}
            >
                <Prize {...prize} />
            </li>
        ))}
    </ul>
);

Prizes.propTypes = {
    prizes: PropTypes.arrayOf(PropTypes.shape(PrizeShape)),
};

export default Prizes;
