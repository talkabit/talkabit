import React from "react";
import Img from "gatsby-image";
import { MemberShape } from "../../../utils/props";

import AboutStyles from "../../../styles/about.module.css";


const Member = ({ name, img }) => (
    <div className={AboutStyles.memberContainer}>
        <Img fluid={img.childImageSharp.fluid} />
        <div className={AboutStyles.triangleShape} />
        <div className={AboutStyles.memberNameContainer}>
            <p className={AboutStyles.memberName}>
                {name}
            </p>
        </div>
    </div>
);

Member.propTypes = MemberShape;

export default Member;
