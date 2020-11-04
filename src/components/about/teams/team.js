import React from "react";
import Member from "./member";
import PropTypes from "prop-types";
import { MemberShape } from "../../../utils/props";

const Team = ({ name, members }) => (
    <div>
        <h2>
            {name}
        </h2>
        {members.map((member) => <Member key={member.img.childImageSharp.id} {...member} />)}
    </div>
);

Team.propTypes = {
    name: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape(MemberShape)).isRequired,
};

export default Team;
