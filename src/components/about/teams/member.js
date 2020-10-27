import React from "react";
import Img from "gatsby-image";
import { MemberShape } from "../../../utils/props";

const Member = ({ name, img }) => (
    <div>
        <p>
            {name}
        </p>
        <Img fluid={img.childImageSharp.fluid} />
    </div>
);

Member.propTypes = MemberShape;

export default Member;
