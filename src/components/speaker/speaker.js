import React from "react";
import Img from "gatsby-image";
import classnames from "classnames";
import { SpeakerPageShape } from "../../utils/props";
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

Speaker.propTypes = SpeakerPageShape;

export default Speaker;
