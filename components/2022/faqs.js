import React from 'react'
import { UncontrolledCollapse, Card, CardBody } from 'reactstrap'
import { BsChevronDown } from 'react-icons/bs'
import style from '../../styles/2022/Faqs.module.css'

export default function Faqs({ refProp }) {
    let faqs = [
        {
            question: 'When will the Network a Bit sessions be held?',
            answer: 'The Network a Bit Session will take place on January 15th at 15:30. This session is expected to last 1 hour and 30 minutes so it is scheduled to end at 17:00.',
        },
        {
            question: 'How will the Network a Bit sessions work?',
            answer: 'Throughout this session, our Silver, Gold and Main Sponsors will feature a 10 to 15 minutes presentation where they will introduce their companies, providing valuable insight into their recruitment process, their mission, and the challenges and projects they work on every day. This session is a great opportunity for our participants to learn more about the industry and possibly do some networking with our sponsors.',
        },
        {
            question: 'When will the Interview sessions be held?',
            answer: 'The Interview session will take place on January 14th at 16:30h. This session is expected to last 1 hour and 30 minutes so it is scheduled to end at 18:00h.',
        },
        {
            question: 'How will the Interview sessions work?',
            answer: 'Throughout this session, our Gold and Main Sponsors will be allocated randomly to 3 participants. Upon participant registry, it will be necessary for them to submit their CV, which the interviewing company will have access 2 days prior to the event. The participant will also be notified on which company they have been allocated to. This session is a great opportunity for our participants to learn more about how a company interview works, and will also have the opportunity to receive instant feedback on their performance. As the interviewer, the company has the opportunity to meet with young talent and is expected to provide as much constructive feedback as possible to all 3 interviewees. The company can focus on their posture during the interview, CV content and structure and overall interview performance.',
        },
    ]

    return (
        <section id={style.faqs} ref={refProp}>
            <h3>FAQs</h3>
            <ul>
                {faqs.map((faq, index) => (
                    <button
                        id={`toggler${index}`}
                        key={index}
                        className={style.faq}
                    >
                        <div className={style.question}>
                            <span>{faq.question}</span>
                            <BsChevronDown />
                        </div>
                        <UncontrolledCollapse toggler={`#toggler${index}`}>
                            <Card className={style.card}>
                                <CardBody className={style.cardBody}>
                                    {faq.answer}
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                    </button>
                ))}
            </ul>
        </section>
    )
}
