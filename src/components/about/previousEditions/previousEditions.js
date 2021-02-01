import React from "react";

import AboutStyles from "../../../styles/about.module.css";

import { PreviousEditionShape } from "../../../utils/props";
import PreviousEdition from "./previousEdition";
import PropTypes from "prop-types";


const PreviousEditions = ({ editions }) => (
    <div>
        <h2 className={AboutStyles.titleLeft2}>Previous Editions</h2>
        <div className={AboutStyles.editionsContainer}>
            {editions.map(({ node }) => (
                <PreviousEdition key={node.year} {...node} />
            ))}
        </div>
    </div>

);

PreviousEditions.propTypes = {
    editions: PropTypes.arrayOf(PropTypes.shape(PreviousEditionShape)),
};

export default PreviousEditions;
