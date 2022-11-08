import React, { useRef } from 'react'
import Head from 'next/head'
import Navbar from '../../components/2022/navbar'
import Hero from '../../components/2022/hero'
import Footer from '../../components/2022/footer'
import Speakers from '../../components/2022/speakers'
import Agenda from '../../components/2022/agenda'
import Sponsors from '../../components/2022/sponsors'
import styles from '../../styles/2022/Home.module.css'
import Editions from '../../components/2022/editions'
import Faqs from '../../components/2022/faqs'
import Team from '../../components/2022/team'

export default function Home() {
    const speakersRef = useRef(null)
    const agendaRef = useRef(null)
    const sponsorsRef = useRef(null)
    const editionsRef = useRef(null)

    return (
        <div className={styles.container}>
            <Head>
                <title>Talk A Bit</title>
                <meta
                    name="description"
                    content="Currently on the way to its 10th edition, Talk a Bit offers its participants
            an event that promotes learning, exchange of ideas and socializing.
            Talk a Bit is one of the largest annual events in FEUP for
            software enthusiasts, having sold out 500 tickets in the latest
            edition."
                />
                <link rel="icon" href="/2022/favicon.ico" />
            </Head>

            <Navbar
                speakersRef={speakersRef}
                agendaRef={agendaRef}
                sponsorsRef={sponsorsRef}
                editionsRef={editionsRef}
            />
            <Hero />
            <main className={styles.main}>
                <section className={styles.intro}>
                    <h3>Let’s Talk a Bit About Technology</h3>
                    <p>
                        Currently on the way to its 10th edition, Talk a Bit
                        offers participants an event that promotes learning,
                        exchange of ideas and socializing. Talk a Bit is one of
                        the largest annual events in FEUP for software
                        enthusiasts, having sold out 500 tickets in the latest
                        edition.
                    </p>
                    <p>
                        In this event, participants can attend talks, get
                        hands-on experience in workshops and discuss the state
                        of the industry with professionals in talk panels. As
                        well as socialize with participants from different
                        universities with some entertainment activities.
                    </p>
                    <p>
                        With the presence of our partners and our networking
                        activities, the participants will be able to make the
                        first contact with professionals and the organizations
                        that make up the industry.
                    </p>
                    <p>
                        The 10th edition of Talk a Bit will be held fully
                        remotely live streamed, on the 15th of January of 2022.
                        FEUP undertakes activities in the realms of education,
                        research, and innovation at an international level.
                        Accordingly, this leads to the creation and transmission
                        of knowledge, training of competent and ethical
                        professionals, and future leaders, while also promoting
                        the wellbeing of our society.
                    </p>
                </section>
                <Speakers refProp={speakersRef} />
                <Agenda refProp={agendaRef} />
                <Sponsors refProp={sponsorsRef} />
                <Editions refProp={editionsRef} />
                <Faqs />
                <Team />
            </main>

            <Footer />
        </div>
    )
}
