import React from "react";
import Img from "gatsby-image";

import { SpeakerShape } from "../../utils/props";

const Speaker = ({ name, occupations, bio, role, img, linkedin }) => (
    <div>
        <h3>
            {name}
        </h3>
        <p>
            {role}
        </p>
        <Img fluid={img.childImageSharp.fluid} />
        <ul>
            {occupations.map((occupation) => (
                <li key={occupation.what}>
                    {occupation.what}
                    {" "}
                    @
                    {occupation.where}
                </li>
            ))}
        </ul>
        <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
        </a>
        <p>
            {bio}
        </p>
    </div>
);

Speaker.propTypes = SpeakerShape;

export default Speaker;
