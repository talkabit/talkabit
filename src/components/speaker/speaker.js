import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import classnames from "classnames";

import styles from "../../styles/speakers.module.css";

const Speaker = ({ name, bio, img }) => (
    <div className={styles.speaker}>
        <div className={classnames(styles.lines, styles.speakerImgContainer)}>
            <Img fluid={img.childImageSharp.fluid} className={styles.speakerImg} />
        </div>
        <div className={styles.speakerInfo}>
            <h2 className={styles.speakerName}>
                {name}
            </h2>
            <p className={styles.speakerBio}>
                {bio}
            </p>
        </div>
    </div>
);

Speaker.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    img: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.object,
        }),
    }).isRequired,
};

export default Speaker;
