import React, { useState } from 'react'
import style from '../styles/Agenda.module.css'

export default function Agenda() {
    const [talksOpen, setTalksOpen] = useState(true)

    let talks = [
        {
            name: 'Opening Session',
            speaker: '',
            time: '10:00 - 10:15',
        },
        {
            name: 'Unwrapping the power of Metadata',
            speaker: 'Sónia Liquito @ Spotify',
            time: '10:15 - 11:00',
        },
        {
            name: 'How to use livestream platforms Data to better serve brands and clients',
            speaker: 'João Carvalho @ Tandhem Esports',
            time: '11:00 - 11:45',
        },
        {
            name: '',
            speaker: '',
            time: '11:45 - 12:30',
        },
        {
            name: 'Lunch',
        },
        {
            name: '',
            speaker: '',
            time: '14:00 - 14:45',
        },
        {
            name: 'Engineering Data out of the Ultimate Driving Machine',
            speaker: 'João Gonçalves & José Costa @ Critical TechWorks',
            time: '14:45 - 15:30',
        },
        {
            name: '',
            speaker: '',
            time: '15:30 - 16:15',
        },
        {
            name: 'Break',
        },
        {
            name: '',
            speaker: '',
            time: '16:45 - 17:30',
        },
        {
            name: '',
            speaker: 'João Silveira @ Microsoft',
            time: '17:30 - 18:15',
        },
        {
            name: 'Closing Session',
            speaker: '',
            time: '18:15 - 18:30',
        },
    ]

    let others_1 = [
        {
            name: 'Network a Bit',
            time: '13:30 - 14:45',
            speaker: '',
        },
    ]

    return (
        <div className="agendaBackground">
            <section
                className="agenda"
                data-bs-spy="scroll"
                data-bs-target="#topbar"
                data-bs-offset="130"
                tabIndex="0"
            >
                <h3 id="agendaRef">Agenda</h3>
                <div className="sectionContent">
                    <div id={style.tabSelector}>
                        <button
                            id={style.talksButton}
                            className={talksOpen ? style.selected : ''}
                            onClick={() => setTalksOpen(true)}
                        >
                            TALKS
                        </button>
                        <button
                            id={style.othersButton}
                            className={!talksOpen ? style.selected : ''}
                            onClick={() => setTalksOpen(false)}
                        >
                            PARALLEL EVENTS
                        </button>
                    </div>
                    {talksOpen ? (
                        talks.map((talk, index) => {
                            if (
                                talk.name === 'Lunch' ||
                                talk.name === 'Break'
                            ) {
                                return (
                                    <div id={style.lunch} key={index}>
                                        {talk.name}
                                    </div>
                                )
                            } else if (talk.name === 'Closing Session') {
                                return (
                                    <div
                                        id={style.closing}
                                        className={style.eventEntry}
                                        key={index}
                                    >
                                        <span>
                                            <span className={style.eventName}>
                                                {talk.name}
                                            </span>
                                            <div className={style.eventSpeaker}>
                                                {talk.speaker}
                                            </div>
                                        </span>
                                        <span className={style.eventTime}>
                                            {talk.time}
                                        </span>
                                    </div>
                                )
                            } else if (talk.name === 'Opening Session') {
                                return (
                                    <div
                                        id={style.opening}
                                        className={style.eventEntry}
                                        key={index}
                                    >
                                        <span>
                                            <span className={style.eventName}>
                                                {talk.name}
                                            </span>
                                            <div className={style.eventSpeaker}>
                                                {talk.speaker}
                                            </div>
                                        </span>
                                        <span className={style.eventTime}>
                                            {talk.time}
                                        </span>
                                    </div>
                                )
                            } else {
                                return (
                                    <div
                                        className={style.eventEntry}
                                        key={index}
                                    >
                                        <div className={style.eventTop}>
                                            <span className={style.eventName}>
                                                {talk.name}
                                            </span>
                                            <span className={style.eventTime}>
                                                {talk.time}
                                            </span>
                                        </div>
                                        <div className={style.eventSpeaker}>
                                            {talk.speaker}
                                        </div>
                                    </div>
                                )
                            }
                        })
                    ) : (
                        <div id={style.others}>
                            <span>
                                <h4>24 of January</h4>
                                <div className={style.eventEntry}>
                                    <div className={style.eventTop}>
                                        <span className={style.eventName}>
                                            Hackathon
                                        </span>
                                        <span className={style.eventTime}>
                                            24 - 26 January
                                        </span>
                                    </div>
                                    <div className={style.eventBottom}>
                                        <div
                                            className={style.eventSpeaker}
                                        ></div>
                                        <div className={style.eventTickets}>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.hackerrank.com/talkabit23"
                                            >
                                                Registration
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <span>
                                <h4>28 of January</h4>
                                {others_1.map((event, index) => (
                                    <div
                                        className={style.eventEntry}
                                        key={index}
                                    >
                                        <div className={style.eventTop}>
                                            <span className={style.eventName}>
                                                {event.name}
                                            </span>
                                            <span className={style.eventTime}>
                                                {event.time}
                                            </span>
                                        </div>
                                        <div className={style.eventBottom}>
                                            <div className={style.eventSpeaker}>
                                                {event.speaker}
                                            </div>
                                            {event.tickets && (
                                                <div
                                                    className={
                                                        style.eventTickets
                                                    }
                                                >
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={event.tickets}
                                                    >
                                                        Tickets
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </span>
                            {/* <span>
                            <h4>15 of January</h4>
                            {others_2.map((event, index) => (
                                <div className={style.eventEntry} key={index}>
                                    <div className={style.eventTop}>
                                        <span className={style.eventName}>
                                            {event.name}
                                        </span>
                                        <span className={style.eventTime}>
                                            {event.time}
                                        </span>
                                    </div>
                                    <div className={style.eventBottom}>
                                        <div className={style.eventSpeaker}>
                                            {event.speaker}
                                        </div>
                                        {event.tickets && (
                                            <div className={style.eventTickets}>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href={event.tickets}
                                                >
                                                    Tickets
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </span> */}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
