import PropTypes from "prop-types";

export const SpeakerShape = {
    name: PropTypes.string.isRequired,
    occupations: PropTypes.arrayOf(
        PropTypes.shape({
            what: PropTypes.string,
            where: PropTypes.string,
        })
    ).isRequired,
    bio: PropTypes.string.isRequired,
    role: PropTypes.string,
    linkedin: PropTypes.string.isRequired,
};

export const MemberShape = {
    name: PropTypes.string.isRequired,
    img: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.object,
        }),
    }).isRequired,
};

export const PreviousEditionShape = {
    year: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
};
