import React from "react";
import PropTypes from "prop-types";
import { WinnerShape } from "../../utils/props";
import Winner from "./Winner";

import styles from "../../styles/hackathon.module.css";
import Title from "../common/Title";

const Winners = ({ winners }) => (
    <div className={styles.winnersWrapper}>
        <Title title="Winners" />
        <ul className={styles.winners}>
            {winners.map((winner) => (
                <li key={winner.github}>
                    <Winner {...winner} />
                </li>
            ))}
        </ul>
    </div>
);

Winners.propTypes = {
    winners: PropTypes.arrayOf(PropTypes.shape(WinnerShape)),
};

export default Winners;
