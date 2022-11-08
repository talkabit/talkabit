import React from 'react'
import style from '../../styles/2022/Speakers.module.css'
import Linkedin from '../../public/2022/assets/linkedin.svg'
import Instagram from '../../public/2022/assets/instagram.svg'
import Facebook from '../../public/2022/assets/facebook.svg'

export default function Speakers({ refProp }) {
    let speakers = [
        {
            name: 'Nuno Fonseca',
            title: 'CEO @ Sound Particles',
            image: 'nuno_fonseca.jpeg',
            description:
                'Founder and CEO of Sound Particles, a software company that works on the 3D audio used in every big Hollywood studio, in productions such as Game of Thrones, Star Wars and Dune. Doctorate in Informatics Engineering, former university teacher, author of two books and more than 20 papers regarding sound-related topics. Member of the technical committee "Sound to Cinema" of the Audio Engineering Society (AES)',
            linkedin: 'https://www.linkedin.com/in/nuno-fonseca-04250a30/',
        },
        {
            name: 'Miguel Palhas',
            title: 'Senior Software & Blockchain Engineer @ Subvisual',
            image: 'miguel_palhas.jpeg',
            description:
                'Professional over-engineer at Subvisual, with years of experience in FinTech, Blockchain, Web development and High-Performance.\nAvid blockchain researcher and bounty hunter on his spare time. Master in Informatics Engineering but also an above-average chess player!',
            linkedin: 'https://www.linkedin.com/in/mpalhas/',
        },
        {
            name: 'Cipriano Sousa',
            title: 'CTO @ Farfetch',
            image: 'cipriano_sousa.jpeg',
            description:
                'Cipriano has over 25 years of experience in technology development and innovation. Cipriano has been at Farfetch since the beginning and was responsible for establishing the technology team that built the first version of the platform. As CTO, he is part of the Executive Board and is responsible for managing all areas of technology at Farfetch. He oversees a technology team of around 2.000 experts in the most diverse areas of technology - from product to software development, Data, Infrastructure, security, performance and scalability, R&D and more... He holds a degree in Electrical and Computer Engineering from the Faculty of Engineering at The University of Porto (FEUP).',
            linkedin: 'https://www.linkedin.com/in/ciprianosousa/',
        },
        {
            name: 'Duarte Oliveira',
            title: 'CTO @ Intuitivo',
            image: 'duarte_oliveira.jpeg',
            description:
                'Co-Founder and CTO of Intuitivo, an Ed-Tech start-up helping schools with their digital transformation, improving teacher productivity and student experience. Started working on Intuitivo in 2020 while still studying. Graduated in 2021 and, soon after, Intuitivo joined the Demium acceleration program. Decided to dedicate his full time to the company focusing mainly on product development and fundraising.',
            linkedin: 'https://www.linkedin.com/in/duarte-oliveira-26a7a2168/',
        },
        {
            name: 'Ruca Marques',
            title: 'CEO @ Switch',
            image: 'ruca_marques.jpeg',
            description:
                'Ruca had his first incursion into the payments industry back in 2012. Back then, he co-founded cashtag, a mobile P2P payments app invested by Seedcamp, the biggest European startup accelerator. Confronted with such a fragmented industry—built on top of arcane legacy systems—he later set himself up to build a new payments infrastructure from the ground up, connecting the entire value chain through a modern and flexible payments platform (Switch) where he now serves as CEO.',
            linkedin: 'https://www.linkedin.com/in/rsousamarques/',
        },
        {
            name: 'Ricardo Castro',
            title: 'Lead Site Reliability Engineer @ Anova',
            image: 'ricardo_castro.jpeg',
            description:
                'Lead Site Reliability Engineer at Anova. MSc in Computer Science by the University of Porto. Certified Kubernetes Administrator (CKA) and Certified Kubernetes Application Developer (CKAD) by the Cloud Native Computing Foundation (CNCF). Working daily to build high-performance, reliable and scalable systems. DevOps Porto meetup co-organizer and DevOpsDays Portugal co-organizer. A strong believer in culture and teamwork. Open source passionate, taekwondo amateur, and metal lover.',
            linkedin: 'https://www.linkedin.com/in/mccricardo/',
        },
        {
            name: 'Pedro Henriques',
            title: 'Co-founder @ Newsroom',
            image: 'pedro_henriques.jpeg',
            description:
                'Studied Economy and Management, but ended up growing his career in the Data Science area, most recently working in Dublin for LinkedIn, where he managed a data science team. In 2020, he created Newsroom - a company whose mission is to battle misinformation and promote online plurality. There, he is responsible for defining the vision of their product and leading the technical development of the company. In 2021, Newsroom was elected, by the European Investment Bank, as one of the best European startups.',
            linkedin: 'https://linkedin.com/in/pedro-pamplona-henriques',
        },
        {
            name: 'Gilberto Loureiro',
            title: 'CEO @ Smartex',
            image: 'gilberto_loureiro.jpeg',
            description:
                'Gilberto is passionate about technology and textiles where he has been working since he was 15 years old as a textile quality inspector at a small factory in Barcelos, Portugal. His main goal is to contribute to a fully digital industry & supply chain where technology serves humanity with automated activities and providing a clean, sustainable, transparent, traceable, and minimum-waste Textile Industry. Work 100+ hours a week to achieve such a goal as fast as possible and create a real, measurable and meaningful impact in the World.',
            linkedin: 'https://www.linkedin.com/in/gilberto-loureiro/',
        },
        {
            name: 'Pedro Faria',
            title: 'Senior Director of Engineering @ Feedzai',
            image: 'pedro_faria.jpeg',
            description:
                'Pedro Faria is a Senior Director of Engineering at Feedzai, overseeing the Market Solutions unit for 4 years. His focus is on the application of Feedzai advanced Machine Learning and Complex Event Processing technology to a wide range of real-world fraud prevention and anti-money laundering products.  For over a decade before joining Feedzai, Pedro Faria managed technical teams,  projects and products in the Telecommunications industry working in Novabase and Celfocus (a Novabase/Vodafone Portugal joint venture). His academic background focused on Software Engineering, and he holds a BSc from University of Minho, and a dual MSc from Carnegie Mellon University and University of Coimbra.',
            linkedin: 'https://linkedin.com/in/pjfaria',
        },
        {
            name: 'Tiago Fernandes',
            title: 'CTO @ Coverflex',
            image: 'tiago_fernandes.jpeg',
            description:
                'Former Co-Founder & CTO of Bitmaker, currently CTO of Coverflex. With more than two decades of experience building software, he is currently on a mission to change the way companies reward employees. He leads a team of superstars, helping them to embrace the role of product engineers and to deliver amazing products.',
            linkedin: 'https://www.linkedin.com/in/tiago-m-fernandes',
        },
        {
            name: 'Ricardo Mota',
            title: 'Communications Manager @ PUBG',
            image: 'ricardo_mota.jpeg',
            description:
                'Passionate for video-games, ventured himself in the writing sector by writing game critics and grew inside the industry going through positions such as community manager, public relationships and business developer until he achieved his current one as a communication manager at PUBG, currently working for the Thunder Tier One project.',
            linkedin: 'https://www.linkedin.com/in/ricardo-mota-0b82123',
        },
        {
            name: 'Miguel Vicente',
            title: 'Global Business Lead @ Microsoft',
            image: 'miguel_vicente.jpeg',
            description:
                'Working at Microsoft for almost 15 years, Miguel graduated from FEUP in 2007 and started on the company’s Portuguese subsidiary, working in multiple roles always focused on connecting the company with the broader community of developers, startups, students and partners. In 2016, he moved to Microsoft’s headquarters in Redmond to keep pursuing the mission to empower these communities now at a global scale. In November 2020, he joined the newly formed Gaming Cloud Vertical as the Global Business Lead for the group.',
            linkedin: 'https://www.linkedin.com/in/miguelv/',
        },
        {
            name: 'Eduardo Espinheira',
            title: 'Business Manager @ QAValue',
            image: 'eduardo_espinheira.jpeg',
            description:
                'Eduardo Espinheira is a Management Consultant, Facilitator, Manager, Public Speaker with a track record of happier customers. He leverages individuals and teams to achieve excellence through people engagement, change management with best-practices adoption. He is the author of the MngtBugs & MngtFixes concepts, the Human Management Newsletter, and the Machiavellian PM character.\nOn the 15th he will be presenting the Talk a Bit event!',
            linkedin: 'https://www.linkedin.com/in/eespinheira/',
        },
        {
            name: 'Alina Carvalho',
            title: 'UX & UI Designer @ Altice Labs',
            image: 'alina_carvalho.png',
            description:
                'Alina and Sara are Digital Product Designers at Altice Labs, they are part of the Experience Design team and work with several teams in parallel, such as product development, management and promotion teams, customer support, among others. They focus on ensuring that users of the products and services they design have an intuitive experience suited to their needs. They love to design experiences, always with the constant concern to deliver excellent products.',
            linkedin: 'https://www.linkedin.com/in/alina-carvalho-3baa9b95/',
        },
        {
            name: 'Sara Frias',
            title: 'Digital Product Designer @ Altice Labs',
            image: 'sara_frias.jpg',
            description:
                'Alina and Sara are Digital Product Designers at Altice Labs, they are part of the Experience Design team and work with several teams in parallel, such as product development, management and promotion teams, customer support, among others. They focus on ensuring that users of the products and services they design have an intuitive experience suited to their needs. They love to design experiences, always with the constant concern to deliver excellent products.',
            linkedin: 'https://www.linkedin.com/in/sara-frias-127ab1a6/',
        },
    ]

    return (
        <section id={style.speakers} ref={refProp}>
            <h2>Speakers</h2>
            <div className={style.sectionContent}>
                {speakers.map((speaker, index) => (
                    <div className={style.speakerContainer} key={index}>
                        <img
                            className={style.speakerImage}
                            src={`/2022/assets/speakers/${speaker.image}`}
                        />
                        <span className={style.speakerInfo}>
                            <span className={style.nameAndSocialsContainer}>
                                <span className={style.name}>
                                    {speaker.name}
                                </span>
                                <span className={style.socials}>
                                    {speaker.instagram && (
                                        <a
                                            href={speaker.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Instagram
                                                fill="#149FC4"
                                                width={24.6}
                                                height={24.6}
                                            />
                                        </a>
                                    )}
                                    {speaker.facebook && (
                                        <a
                                            href={speaker.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Facebook
                                                width={24.6}
                                                height={24.6}
                                                fill="#149FC4"
                                            />
                                        </a>
                                    )}
                                    {speaker.linkedin && (
                                        <a
                                            href={speaker.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Linkedin
                                                width={24.6}
                                                height={24.6}
                                                fill="#149FC4"
                                            />
                                        </a>
                                    )}
                                </span>
                            </span>
                            <span className={style.title}>{speaker.title}</span>
                            <span className={style.description}>
                                {speaker.description}
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
