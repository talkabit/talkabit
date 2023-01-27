import React, { useState, useCallback, useEffect } from 'react'
import LinkedinLogo from '../public/assets/linkedin.svg'

export function SplitText(props) {
    const text = props.text
    const newText = text
        .split('\n')
        .map((str, index) => <p key={index}>{str}</p>)
    return newText
}

export default function Speakers() {
    let speakers = [
        {
            name: 'Sónia Liquito',
            title: 'Engineering Manager @ Spotify',
            image: '/assets/speakers/sonia_liquito.jpg',
            description:
                'With knowledge in data processing and a passion for driving organizational growth, I bring a unique perspective to my role as an Engineering Manager at Spotify.\nI am responsible for overseeing the ingestion and distribution of metadata from Music, Podcasts and Audiobooks, which powers features like Spotify Wrapped and Discovery Weekly. With almost 1 million artists creating new content every day, my team and I work to ensure that this metadata is processed efficiently and with the highest quality.\nI am excited to share my insights and knowledge with others, and I look forward to sharing the impact that Data can have to our creators and users and some of our practices in scaling data processing.',
            linkedin: 'https://www.linkedin.com/in/sonialiquito/',
        },
        {
            name: 'João Gonçalves',
            title: 'Chief Technical Titan @ Critical TechWorks',
            image: '/assets/speakers/joao_goncalves.jpg',
            description:
                'In CTW since January 2019 as a Chief Technical Titan, currently working with products centered around Data, thriving on the Cloud ecosystem. Passionate about simple solutions. Also, I’m a biker!',
            linkedin: 'https://www.linkedin.com/in/joagonca/',
        },
        {
            name: 'José Costa',
            title: 'Chief Technical Titan @ Critical TechWorks',
            image: '/assets/speakers/jose_costa.jpg',
            description:
                'At CTW since the first furniture was bought in some garage sale, started as a Data Engineer to move Data to the Cloud and eventually made it through Chief Technical Titan.',
            linkedin: 'https://www.linkedin.com/in/jos%C3%A9-costa-3379201b/',
        },
        {
            name: 'João Silveira',
            title: 'Big Data Engineer @ Microsoft',
            image: '/assets/speakers/joao_silveira.jpg',
            description:
                'With some years and knowledge in working in both in Big Data Engineer consulting and Big Data Technical support, I hope to share my thoughts and perspectives on the Data World and how cloud can help tackling these challenges. \nI am currently working at Microsoft as a Big Data Engineer where I help Microsoft customers in using the Azure Big Data products to unblock their data challenges and help them built the perfect Data platform for their use cases.',
            linkedin: 'https://www.linkedin.com/in/joaopssilveira/',
        },
        {
            name: 'João Carvalho',
            title: 'Managing Partner & Esports Director @ Tandhem Esports',
            image: '/assets/speakers/joao_carvalho.jpg',
            description:
                "I've been involved in a multitude of different projects in the last 10 years, where I was fortunate enough to be involved in the foundation, conceptualization, creation and structuration of more than a dozen of successful companies and projects - mainly in the digital marketing space, but not only. \nIn the last 4, I've focused mainly on the gaming and esports industries where I was actively involved with global and local communities, developing projects, events and digital activations with the main focus of helping in the development of those industries. \nI'll try to explain how big data is helping content creators, players and agencies in getting information about their audience, so they can better serve brands and clients.",
            linkedin: 'https://www.linkedin.com/in/jocaccarvalho/',
        },
        {
            name: 'Marco Sousa',
            title: 'Founder @ zerozero.pt',
            image: '/assets/speakers/marco_sousa.jpg',
            description:
                'Marco Sousa é um dos fundadores do zerozero.pt e atualmente administrador da ZOS Lda que detém o projeto. \nAluno da primeira “fornada” de engenheiros informáticos da FEUP, trabalhou na Esoterica (primeiro ISP português) e na Critical Software, até se aventurar por conta própria com a Memória Visual com diversos projetos web e mobile. Esteve com o projeto zerozero.pt desde o seu início, que começou como um hobbie e cresceu para se tornar um dos maiores websites em Portugal. Desde 2017, as duas empresas partilham espaço e recursos, criando uma atmosfera de trabalho altamente motivante.',
            linkedin: 'https://www.linkedin.com/in/marco-alex-sousa/',
        },
        {
            name: 'Pedro Dias',
            title: 'Founder & COO @ zerozero.pt',
            image: '/assets/speakers/pedro_dias.jpg',
            description:
                'Pedro Dias é engenheiro de formação e football geek por vocação. \nTambém aluno da primeira geração de Engenheiros Informáticos da FEUP (1994/99), começou por estar 10 anos a tentar ajudar as fábricas a serem mais eficientes em áreas como Planeamento de Produção e Shop Floor Control. Em paralelo, desde 2003, ajudou a idealizar, modelizar e implementar o zerozero.pt, um projeto que é de facto a sua "cadeira de sonho".',
            linkedin: 'https://www.linkedin.com/in/pedro-dias-09146b1/',
        },
        {
            name: 'Cristiana Ramos',
            title: 'Senior Manager @ Deloitte',
            image: '/assets/speakers/cristiana_ramos.jpg',
            description:
                'Cristiana is one of the leads of the Cloud & Technology Strategy practice and the head of the Next Generation Operating Models offering. \nCristiana has more than 11 years of experience leading several projects around the world in the areas of IT Strategy definition, Technology Governance and Project Management. \nCristiana has led several advisory projects with different scopes, but her focus is helping clients adopting IT operating and governance models trends by designing conceptual models and implementation roadmaps to adopt agile by design.',
            linkedin: 'https://www.linkedin.com/in/cristianaramos/',
        },
        {
            name: 'Ricardo Martins',
            title: 'Associate Partner @ Deloitte',
            image: '/assets/speakers/ricardo_martins.jpg',
            description:
                'Ricardo joined Deloitte in 2021 as a member of our Global Smart Cities & Urban Transformation team. He is responsible for the development and growth of Synergy’s business and its technological alliances. \nWith more than 20 years of experience directing full-scale projects and business development initiatives for global corporations, he worked in areas such as Consulting, Government, Telecommunications, and Information Technology. \nBefore joining Deloitte, Ricardo worked for Philips where he was responsible for the development of the Smart Cities strategy for the Iberian Market, new business models, and technological partnerships. \nHe is also Advisor to technology-based Startups and an Expert for European Community Horizon 2020 Program.',
            linkedin: 'https://www.linkedin.com/in/ricardofmartins/',
        },
        {
            name: 'Liliana Ferreira',
            title: 'Executive Director & Researcher @ Fraunhofer',
            image: '/assets/speakers/liliana_ferreira.jpg',
            description:
                'Liliana Ferreira is chair of Fraunhofer Portugal and director of its research centre for Assistive Information and Communication Solutions (AICOS) since 2017. Liliana is also an invited Full Professor at the Department of Informatics of the Faculty of Engineering of the University of Porto. \nHer research focuses on the areas of Natural Language Processing, Medical Knowledge Representation, Information Extraction, and Health Informatics. \nLiliana holds a degree in Applied Mathematics and Technology by the Faculty of Sciences of the University of Porto (2002), a MSc in Electronics and Telecommunications Engineering and a Ph.D. in Informatics (2011) both from the University of Aveiro, Portugal. \nLiliana has developed her research in industry and research organizations as Philips Research Eindhoven (NL), IBM Research and Development Böblingen (DE), the Institute of Electronics and Telematics Engineering of Aveiro (PT), the Ubiquitous Knowledge Lab of the Technical University of Darmstadt (DE) and the University of Tübingen (DE).',
            linkedin: 'https://www.linkedin.com/in/liliana-ferreira-12769639/',
        },
        {
            name: 'Tiago Matos',
            title: 'Co-Founder @ Jumpseller',
            image: '/assets/speakers/tiago_matos.jpg',
            description:
                'I am passionate about Web Development as a whole. From server setup, DB optimization and rapid prototyping. Usefulness and usability are the key ingredients of what I like to do. \nWith extensive proficiency in Ruby and AWS, after 2018, I have been developing myself technically mostly on Infrastructure, DevOps and Security projects. \nMost of my time is spent on managing Jumpseller, with emphasis on Customer Relationships, Hiring, Governmental Programs, SCRUM methodology & OKRs framework.',
            linkedin: 'https://www.linkedin.com/in/tiagomatos/',
        },
    ]

    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false)

        const updateTarget = useCallback((e) => {
            if (e.matches) {
                setTargetReached(true)
            } else {
                setTargetReached(false)
            }
        }, [])

        useEffect(() => {
            const media = window.matchMedia(`(max-width: ${width}px)`)
            media.addEventListener('change', (e) => updateTarget(e))

            // Check on mount (callback is not called until a change occurs)
            if (media.matches) {
                setTargetReached(true)
            }

            return () =>
                media.removeEventListener('change', (e) => updateTarget(e))
        }, [])

        return targetReached
    }

    const isBreakpoint = useMediaQuery(768)

    return (
        <section
            className="speakers"
            data-bs-spy="scroll"
            data-bs-target="#topbar"
            data-bs-offset="130"
            tabIndex="0"
        >
            <h3 id="speakersRef">Speakers</h3>
            <div className="container text-center">
                <div className="row row-eq-height row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                    {speakers.map((speaker, index) => (
                        <div className="col" key={index}>
                            <div className="parent_container">
                                <div className="image_container">
                                    <img
                                        src={speaker.image}
                                        data-bs-toggle="modal"
                                        data-bs-target={
                                            '#exampleModal' + index.toString()
                                        }
                                    />
                                    <div className="bottom">
                                        <p className="p1">{speaker.name}</p>
                                        <p className="p2">{speaker.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {speakers.map((speaker, index) => (
                <div key={index}>
                    {isBreakpoint ? (
                        <div
                            className="modal fade"
                            id={'exampleModal' + index.toString()}
                            tabIndex="-1"
                            aria-labelledby={
                                'exampleModalLabel' + index.toString()
                            }
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1
                                            className="modal-title fs-5"
                                            id={
                                                'exampleModalLabel' +
                                                index.toString()
                                            }
                                            color="#212c55"
                                        >
                                            {speaker.name}
                                            <a
                                                href={speaker.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <LinkedinLogo
                                                    width={32}
                                                    height={32}
                                                    fill="#00a9ce"
                                                />
                                            </a>
                                            <br />
                                            <small style={{ color: '#41b38d' }}>
                                                {speaker.title}
                                            </small>
                                        </h1>

                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div
                                                className="modal-image-container"
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <div className="modal_image">
                                                    <img
                                                        src={speaker.image}
                                                        style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="modal-body">
                                                <SplitText
                                                    text={speaker.description}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="modal fade"
                            id={'exampleModal' + index.toString()}
                            tabIndex="-1"
                            aria-labelledby={
                                'exampleModalLabel' + index.toString()
                            }
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered modal-xl">
                                <div className="modal-content">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div
                                                className="modal-image-container"
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <div className="modal_image">
                                                    <img
                                                        className="rounded-start"
                                                        src={speaker.image}
                                                        style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-md-8"
                                            style={{ textAlign: 'left' }}
                                        >
                                            <div className="modal-header">
                                                <h1
                                                    className="modal-title fs-5"
                                                    id={
                                                        'exampleModalLabel' +
                                                        index.toString()
                                                    }
                                                    color="#212c55"
                                                >
                                                    {speaker.name}
                                                    <a
                                                        href={speaker.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <LinkedinLogo
                                                            width={32}
                                                            height={32}
                                                            fill="#00a9ce"
                                                        />
                                                    </a>
                                                    <br />
                                                    <small
                                                        style={{
                                                            color: '#41b38d',
                                                        }}
                                                    >
                                                        {speaker.title}
                                                    </small>
                                                </h1>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                <SplitText
                                                    text={speaker.description}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </section>
    )
}
