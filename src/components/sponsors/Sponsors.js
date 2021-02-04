import React from "react";
import PropTypes from "prop-types";
import Sponsor from "./Sponsor";
import { SponsorShape } from "../../utils/props";

import styles from "../../styles/sponsors.module.css";
import styles2 from "../../styles/speakers.module.css";

const Sponsors = ({ tiers }) => (
    <div>
        {tiers.map((tier) => (
            <div key={tier.fieldValue} className={styles.tier}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.tierTitle}>
                        {tier.fieldValue.slice(2)}
                    </h1>
                </div>
                <ul className={styles2.speakers}>

                    {tier.edges.map(({ node }) => (
                        <li className={styles2.item} key={node.name}>
                            <Sponsor  {...node} />
                        </li>

                    ))}
                </ul>

            </div>
        ))}
    </div>
);

Sponsors.propTypes = {
    tiers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape(SponsorShape))),
};

export default Sponsors;
