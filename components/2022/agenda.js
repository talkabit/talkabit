import React, { useState } from 'react'
import style from '../../styles/2022/Agenda.module.css'

export default function Agenda({ refProp }) {
    const [talksOpen, setTalksOpen] = useState(true)

    let talks = [
        {
            name: 'Opening Session',
            time: '09:30 - 09:45',
            speaker: 'Pascoal Faria',
        },
        {
            name: 'The global tech platform leading the future of retail',
            time: '09:45 - 10:15',
            speaker: 'Cipriano Sousa',
        },
        {
            name: 'Online Misinformation and the role of "Tech for Good"',
            time: '10:15 - 10:45',
            speaker: 'Pedro Henriques',
        },
        {
            name: 'Video-games as investment projects',
            time: '11:00 - 11:30',
            speaker: 'Ricardo Mota',
        },
        {
            name: 'Innovation for the Greater Good: How Feedzai keeps Fraudsters in the rear-view mirror',
            time: '11:30 - 12:00',
            speaker: 'Pedro Faria',
        },
        { name: 'Switch Payments', time: '12:00 - 12:30', speaker: '' },
        { name: 'Lunch' },
        {
            name: 'Digital products – There is more than meets the eye!',
            time: '14:00 - 14:30',
            speaker: 'Sara Frias Almeida & Alina Carvalho',
        },
        {
            name: 'Non-linear career paths in the tech world and how to navigate them',
            time: '14:30 - 15:00',
            speaker: 'Miguel Vicente',
        },
        {
            name: 'How to convert a Software Engineer into a Product Engineer',
            time: '15:00 - 15:30',
            speaker: 'Tiago Fernandes',
        },
        {
            name: 'Making Audio Software for Hollywood',
            time: '15:45 - 16:15',
            speaker: 'Nuno Fonseca',
        },
        {
            name: 'From a textile factory to Silicon Valley',
            time: '16:15 - 16:45',
            speaker: 'Gilberto Loureiro',
        },
        {
            name: '"How to build a successful startup" - Debate',
            time: '17:00 - 18:00',
            speaker: '',
        },
        {
            name: 'Closing Session',
            time: '18:00 - 18:15',
            speaker: 'Raul Vidal',
        },
    ]

    let others_1 = [
        {
            name: 'Blockchain & Smart contracts',
            time: '14:30 - 16:30',
            speaker: 'Miguel Palhas',
            tickets:
                'https://www.eventbrite.pt/e/bilhetes-workshop-tab-blockchain-smart-contracts-234330798727',
        },
        {
            name: 'Interview Session',
            time: '16:30 - 17:00',
            speaker: '',
            tickets:
                'https://www.eventbrite.pt/e/bilhetes-interview-session-tab-234344279047',
        },
    ]

    let others_2 = [
        {
            name: 'From Code to Kubernetes',
            time: '10:00 - 11:30',
            speaker: 'Ricardo Castro',
            tickets:
                'https://www.eventbrite.pt/e/bilhetes-workshop-tab-from-code-to-kubernetes-234467928887',
        },
        {
            name: 'An Intro to eCommerce Payment APIs and Integrations',
            time: '14:00 - 15:30',
            speaker: 'Daniel and José, Software Engineers @ Switch',
            tickets:
                'https://www.eventbrite.pt/e/bilhetes-workshop-tab-online-payments-using-dolphin-protocol-244709732397',
        },
        {
            name: 'Network a Bit',
            time: '15:30 - 17:00',
            speaker: '',
        },
    ]

    return (
        <section ref={refProp}>
            <h2>Agenda</h2>
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
                        OTHER EVENTS
                    </button>
                </div>
                {talksOpen ? (
                    talks.map((talk, index) => {
                        if (talk.name === 'Lunch') {
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
                                <div className={style.eventEntry} key={index}>
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
                            <h4>14 of January</h4>
                            {others_1.map((event, index) => (
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
                        </span>
                        <span>
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
                        </span>
                        <span>
                            <h4>18 of January</h4>
                            <div className={style.eventEntry}>
                                <div className={style.eventTop}>
                                    <span className={style.eventName}>
                                        Code a Bit - Hackaton
                                    </span>
                                    <span className={style.eventTime}>
                                        18 - 20 January
                                    </span>
                                </div>
                                <div className={style.eventBottom}>
                                    <div className={style.eventSpeaker}></div>
                                    <div className={style.eventTickets}>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="/2022/hackathon_regulations.pdf"
                                        >
                                            Registration
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                )}
            </div>
        </section>
    )
}
