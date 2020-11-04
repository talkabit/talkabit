import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

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
                {speakers.map((speaker, index) => (
                    <span key={speaker.name}>
                        {`${index > 0 ? ", " : ""} ${speaker.name}`}
                    </span>
                ))}
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
            name: PropTypes.string.isRequired,
            occupations: PropTypes.arrayOf(
                PropTypes.shape({
                    what: PropTypes.string,
                    where: PropTypes.string,
                })
            ).isRequired,
        })
    ),
    slug: PropTypes.string,
};

export default Event;
