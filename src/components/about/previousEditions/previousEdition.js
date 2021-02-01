import React from "react";
import { Link } from "gatsby";

import AboutStyles from "../../../styles/about.module.css";
import { PreviousEditionShape } from "../../../utils/props";


const PreviousEdition = ({ year, website }) => (

    <div className={AboutStyles.editionContainer}>
        <Link to={website} className={AboutStyles.edition}>
            {year}
        </Link>
    </div>
);

PreviousEdition.propTypes = PreviousEditionShape;

export default PreviousEdition;
