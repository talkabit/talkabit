import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import styles from "../../styles/sponsors.module.css";

const Sponsor = ({ tier, img }) => {

    function tierToClass(tier) {
        let tierClass;
        if (tier === "0-Gold") {
            tierClass = styles.gold;
        } else if (tier === "1-Silver") {
            tierClass = styles.silver;
        } else
            tierClass = styles.bronze;

        return tierClass;
    }

    return (
        <div className={tierToClass(tier)}>
            <Img fluid={img.childImageSharp.fluid} className={styles.logo} />
        </div>
    );
};

Sponsor.propTypes = {
    tier: PropTypes.string.isRequired,
    img: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.object,
        }),
    }).isRequired,
};

export default Sponsor;
