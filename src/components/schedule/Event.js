import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { SpeakerShape } from "../../utils/props";

const Event = ({ title, startTime, endTime, speakers, slug }) => (
    <div>
        <h4>
            {slug ? (
                <Link to={`/${slug}`}>
                    {title}
                </Link>) : title}
        </h4>
        <p>
            {`${startTime}-${endTime}`}
        </p>
        {speakers && (
            <p>
                {speakers.map((speaker) => (speaker.name)).join(", ")}
            </p>
        )}
    </div>
);

Event.propTypes = {
    title: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    speakers: PropTypes.arrayOf(
        PropTypes.shape({
            name: SpeakerShape.name,
            occupations: SpeakerShape.occupations,
        })
    ),
    slug: PropTypes.string,
};

export default Event;
