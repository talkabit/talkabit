import React from "react";
import { WinnerShape } from "../../utils/props";

const Winner = ({ name, github }) => (
    <div>
        <h6>
            {name}
        </h6>
        <a href={github} target="_blank" rel="noreferrer">
            Repository
        </a>
    </div>
);

Winner.propTypes = WinnerShape;

export default Winner;
