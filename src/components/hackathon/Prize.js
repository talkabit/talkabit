import React from "react";
import Img from "gatsby-image";
import { PrizeShape } from "../../utils/props";

const Prize = ({ name, tier, img }) => (
    <div>
        <h5>
            {name}
        </h5>
        <div>
            {tier}
        </div>
        <Img fluid={img.childImageSharp.fluid} />
    </div>
);

Prize.propTypes = PrizeShape;

export default Prize;
