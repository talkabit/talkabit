import React from "react";
import Speaker from "./speaker";
import PropTypes from "prop-types";
import styles from "../../styles/speakers.module.css";
import { SpeakerPageShape } from "../../utils/props";


const SpeakerList = ({ list }) => (
    <ul className={styles.speakers}>
        {list
            .map(({ node }) =>
                node.frontmatter.speakers.map((edge) => (
                    <li key={edge.name} className={styles.item}>
                        <Speaker
                            {...edge}
                            {...node.frontmatter}
                        />
                    </li>
                ))
            )}
    </ul>
);

SpeakerList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({ SpeakerPageShape })),
};

export default SpeakerList;
