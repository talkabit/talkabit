import PropTypes from "prop-types";

const ImageShape = PropTypes.shape({
    childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
    }),
});

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
    img: ImageShape.isRequired,
};

export const PrizeShape = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    tier: PropTypes.string.isRequired,
    tierName: PropTypes.string.isRequired,
    img: ImageShape.isRequired,
};

export const WinnerShape = {
    github: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
