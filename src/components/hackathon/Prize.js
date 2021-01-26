import React from "react";
import Img from "gatsby-image";
import { PrizeShape } from "../../utils/props";
import PrizeTitle from "./PrizeTitle";
import classnames from "classnames";

import styles from "../../styles/hackathon.module.css";

const Prize = ({ name, tier, img }) => (
    <div className={classnames(styles.prize, styles[`prize${tier}`])}>
        <PrizeTitle title={name} />
        <Img fluid={img.childImageSharp.fluid} className={styles.image} />
    </div>
);

Prize.propTypes = PrizeShape;

export default Prize;
