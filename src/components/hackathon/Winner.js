import React from "react";
import { WinnerShape } from "../../utils/props";
import { FaGithub } from "react-icons/fa";

import styles from "../../styles/hackathon.module.css";

const Winner = ({ name, github }) => (
    <div className={styles.winner}>
        <h3 className={styles.winnerTitle}>
            {name}
        </h3>
        <div className={styles.linkWrapper}>
            <FaGithub color="#FFFFFF" size="2em" />
            <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className={styles.repoLink}
            >
                {github}
            </a>
        </div>
    </div>
);

Winner.propTypes = WinnerShape;

export default Winner;
