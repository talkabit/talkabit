import React from "react";
import Image from "gatsby-image";
import { SponsorShape } from "../../utils/props";

const Sponsor = ({ file, img, name }) =>
    (
        <div>
            <h2>
                {name}
            </h2>
            <Image fluid={img.childImageSharp.fluid} alt={name}/>
            <a href={file.publicURL} download>
                Download Assets
            </a>
        </div>
    );

Sponsor.propTypes = SponsorShape;

export default Sponsor;
