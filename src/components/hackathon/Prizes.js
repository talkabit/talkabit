import React from "react";
import PropTypes from "prop-types";

import Prize from "./Prize";
import { PrizeShape } from "../../utils/props";

const Prizes = ({ prizes }) => (
    <ul>
        {prizes.map((prize) => (
            <li key={prize.tier}>
                <Prize {...prize} />
            </li>
        ))}
    </ul>
);

Prizes.propTypes = {
    prizes: PropTypes.arrayOf(PropTypes.shape(PrizeShape)),
};

export default Prizes;
