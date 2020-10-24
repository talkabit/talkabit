import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Speaker = ({
    speaker: { name, occupations, bio, role, img, linkedin },
}) => (
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

Speaker.propTypes = {
    speaker: PropTypes.shape({
        name: PropTypes.string.isRequired,
        occupations: PropTypes.arrayOf(
            PropTypes.shape({
                what: PropTypes.string.isRequired,
                where: PropTypes.string.isRequired,
            })
        ).isRequired,
        bio: PropTypes.string.isRequired,
        role: PropTypes.string,
        linkedin: PropTypes.string.isRequired,
        img: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.node,
            }),
        }).isRequired,
    }),
};

export default Speaker;
