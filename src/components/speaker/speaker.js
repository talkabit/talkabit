import React from "react";
import { SpeakerPageShape } from "../../utils/props";
import styles from "../../styles/speakers.module.css";
import ListItem from "../utils/ListItem";

const Speaker = ({ name, bio, img, date, startTime }) => (
    <div id={name.replace(" ", "-")}>
        <ListItem name={name} img={img}>
            <p className={styles.start}>
                {`${date} - ${startTime}`}
            </p>
            <p className={styles.speakerBio}>
                {bio}
            </p>
        </ListItem>
    </div>
);

Speaker.propTypes = SpeakerPageShape;

export default Speaker;
