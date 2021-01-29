import React from "react";
import PropTypes from "prop-types";
import Sponsor from "./Sponsor";
import { SponsorShape } from "../../utils/props";

import styles from "../../styles/sponsors.module.css";

const Sponsors = ({ tiers }) => (
    <div>
        {tiers.map((tier) => (
            <div key={tier.fieldValue} className={styles.tier}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.tierTitle}>
                        {tier.fieldValue.slice(2)}
                    </h1>
                </div>

                {tier.edges.map(({ node }) => (
                    <Sponsor key={node.name} {...node} />
                ))}
            </div>
        ))}
    </div>
);

Sponsors.propTypes = {
    tiers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape(SponsorShape))),
};

export default Sponsors;
