import React from "react";
import PropTypes from "prop-types";
import { Speaker } from "./activity/speaker";
import { SpeakerShape } from "../utils/props";
import { Link } from "gatsby"
import md5 from "md5";

function AddLink(slug, content) {
    if (typeof slug !== 'undefined')
        return <Link to={slug}>{content}</Link>
    else
        return content
}

function AddSpeakers(speakers) {
    if (speakers !== null) {
        return (
            <div>
                {speakers.map((speaker) => (
                    <p key={speaker.name}>{speaker.name}</p>
                ))}
            </div>
        )
    } else 
        return " "


}

const MinActivity = ({ title, date, endTime, startTime, type, slug, speakers }) => {

    const content = (
        <div>
            <div>
                <p>{date}</p>
            </div>
            <div>
                <p>{title}</p>
            </div>
            {AddSpeakers(speakers)}
        </div>
    )

    return AddLink(slug, content)
}

MinActivity.propTypes = {
    html: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    slug: PropTypes.string,
    speakers: PropTypes.arrayOf(PropTypes.shape(SpeakerShape))
};

export default MinActivity;
