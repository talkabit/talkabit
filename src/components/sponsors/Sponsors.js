import React from "react";
import PropTypes from "prop-types";
import Sponsor from "./Sponsor";
import { SponsorShape } from "../../utils/props";

const Sponsors = ({ tiers }) => (
    <div>
        {tiers.map((tier) => (
            <div key={tier.fieldValue}>
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
