import React from "react";
import PropTypes from "prop-types";
import { SpeakerShape } from "../utils/props";
import { Link } from "gatsby";

function AddSpeakers(speakers) {
    if (speakers !== null) {
        return (
            <div>
                {speakers.map((speaker) => (
                    <p key={speaker.name}>
                        {speaker.name}
                    </p>))
                }
            </div>
        );
    } else
        return " ";
}

const MinActivity = ({ title, date, startTime, endTime, slug, speakers }) => (
    <Link to={`/${slug}`}>
        <div>
            <p>
                {date}
            </p>
            <p>
                {startTime}
                {" - "}
                {endTime}
            </p>
        </div>
        <div>
            <p>
                {title}
            </p>
        </div>
        {AddSpeakers(speakers)}
    </Link>
);

MinActivity.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    slug: PropTypes.string,
    speakers: PropTypes.arrayOf(PropTypes.shape(SpeakerShape)),
};

export default MinActivity;
