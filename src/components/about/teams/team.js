import React from "react";
import Member from "./member";
import PropTypes from "prop-types";
import { MemberShape } from "../../../utils/props";

import AboutStyles from "../../../styles/about.module.css";


const Team = ({ name, members }) => (
    <div>
        <div className={AboutStyles.titleContainer}>
            <h2 className={AboutStyles.teamTitle}>
                {name}
            </h2>
        </div>
        <div className={AboutStyles.teamContainer}>
            {members.map((member) => <Member key={member.img.childImageSharp.id} {...member} />)}
        </div>
    </div>
);

Team.propTypes = {
    name: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape(MemberShape)).isRequired,
};

export default Team;
