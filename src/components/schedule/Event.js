import React from "react";
import PropTypes from "prop-types";
import { SpeakerShape } from "../../utils/props";
import Img from "gatsby-image";
import { navigate } from "@reach/router";

import styles from "./schedule.module.css";
import { ImTicket } from "react-icons/im";

const EventDetailsSpeaker = ({ speakers, title, description, showPicture }) => (
    <>
        {showPicture ?
            (
                speakers.map((speaker, i) => ( // It's ok to use i as key, since the elements won't change
                    <div key={i} className={styles.speakerEntry}>
                        <div className={styles.eventPicture} onClick={() => navigate(`/speakers/#${speaker.name.replace(" ", "-")}`)}>
                            <Img fluid={speaker.img.childImageSharp.fluid}/>
                        </div>
                        <div className={styles.titleAuthor}>
                            <div className={styles.eventTitle}>
                                {title}
                            </div>

                            <div className={styles.author} onClick={() => navigate(`/speakers/#${speaker.name.replace(" ", "-")}`)}>
                                {speaker.name}
                            </div>
                            <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}/>
                        </div>
                    </div>
                ))
            )
            :
            (
                <div className={styles.titleAuthor}>
                    <div className={styles.eventTitle}>
                        {title}
                    </div>

                    <div className={styles.author}>
                        {speakers.map((speaker) => speaker.name).join(", ")}
                    </div>
                </div>
            )
        }
    </>
);

EventDetailsSpeaker.propTypes = {
    showPicture: PropTypes.bool,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    speakers: PropTypes.arrayOf(
        PropTypes.shape({
            name: SpeakerShape.name,
            occupations: SpeakerShape.occupations,
        })
    ),
};

const Event = ({ title, startTime, endTime, speakers, slug, showPicture = true, promoted }) => (
    <div className={`${styles.event} ${promoted ? styles.promotedInline : ""}`}>
        <div className={styles.time}>
            {startTime}
        </div>
        <div className={styles.eventDetails}>
            {speakers && !promoted ?
                <EventDetailsSpeaker
                    showPicture={showPicture}
                    title={title}
                    startTime={startTime}
                    endTime={endTime}
                    speakers={speakers}
                    slug={slug}
                />
                :
                (
                    <div className={styles.eventTitle}>
                        <p>
                            {title}
                        </p>
                    </div>
                )
            }
        </div>
    </div>
);

Event.propTypes = {
    showPicture: PropTypes.bool,
    title: PropTypes.string.isRequired,
    promoted: PropTypes.bool,
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

export const PromotedEvent = ({ title, startTime, endTime, tickets }) => (
    <div className={styles.promotedEvent}>
        <div className={styles.time}>
            {`${startTime} - ${endTime}`}
        </div>
        <div className={styles.title}>
            {tickets ?   (
                <a href={tickets} style={{ color: "white", textDecoration: "none" }} className={styles.tickets} target="_blank" rel="noreferrer">
                    <ImTicket size="1.5rem"/>
                    <p>
                        {title}
                    </p>
                </a>
            ) : (
                <p>
                    {title}
                </p>
            )}
        </div>
    </div>
);

PromotedEvent.propTypes = {
    title: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    tickets: PropTypes.string,
};


export default Event;
