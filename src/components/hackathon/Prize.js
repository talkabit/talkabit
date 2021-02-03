import React from "react";
import Img from "gatsby-image";
import { PrizeShape } from "../../utils/props";
import PrizeTitle from "./PrizeTitle";
import classnames from "classnames";

import styles from "../../styles/hackathon.module.css";

const Prize = ({ name, brand, tier, tierName, img }) => (
    <div className={classnames(styles.prize, styles[`prize${tier}`])}>
        <div className={styles.imageContainer}>
            <PrizeTitle title={tierName} />
            <Img
                style={{ height: "100%", width: "100%" }}
                imgStyle={{ objectFit: "contain" }}
                fluid={img.childImageSharp.fixed}
                className={styles.image}
            />
        </div>
        <div className={styles.prizeInfo}>
            <div>
                {name}
            </div>
            <div>
                {brand}
            </div>
        </div>
    </div>
);

Prize.propTypes = PrizeShape;

export default Prize;
