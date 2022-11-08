import React from 'react'
import style from '../../styles/2022/Team.module.css'

export default function Team({ refProp }) {
    let local_organization = [
        {
            name: 'Filipa Senra',
            image: '/2022/assets/team/filipa_senra.png',
        },
        {
            name: 'Tiago Verdade',
            image: '/2022/assets/team/tiago_verdade.png',
        },
        {
            name: 'Cláudia Martins',
            image: '/2022/assets/team/claudia_martins.png',
        },
        {
            name: 'Inês Alves',
            image: '/2022/assets/team/ines_alves.png',
        },
    ]

    let sponsorships = [
        {
            name: 'João Lemos',
            image: '/2022/assets/team/joao_lemos.png',
        },
        {
            name: 'Gonçalo Marantes',
            image: '/2022/assets/team/goncalo_marantes.png',
        },
    ]

    let program = [
        {
            name: 'Henrique Freitas',
            image: '/2022/assets/team/henrique_freitas.png',
        },
        {
            name: 'Miguel Pires',
            image: '/2022/assets/team/miguel_pires.png',
        },
        {
            name: 'Pedro Esteves',
            image: '/2022/assets/team/pedro_esteves.png',
        },
        {
            name: 'Tiago Alves',
            image: '/2022/assets/team/tiago_alves.png',
        },
    ]

    let media = [
        {
            name: 'Rafa Varela',
            image: '/2022/assets/team/rafa_varela.png',
        },
        {
            name: 'José Silva',
            image: '/2022/assets/team/jose_silva.png',
        },
    ]

    let chair = [
        {
            name: 'João Pinto',
            image: '/2022/assets/team/joao_pinto.png',
        },
    ]

    let parallel_events = [
        {
            name: 'Vítor Barbosa',
            image: '/2022/assets/team/vitor_barbosa.png',
        },
        {
            name: 'Gonçalo Marantes',
            image: '/2022/assets/team/goncalo_marantes.png',
        },
    ]

    return (
        <section id={style.team} ref={refProp}>
            <h3>Meet the Team</h3>
            <div className={style.department}>
                <h4>Local Organization</h4>
                <ul>
                    {local_organization.map((member, index) => (
                        <li className={style.member} key={index}>
                            <img
                                src={member.image}
                                className={style.memberImage}
                            />
                            <span className={style.memberName}>
                                {member.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.department}>
                <h4>Sponsorships</h4>
                <ul>
                    {sponsorships.map((member, index) => (
                        <li className={style.member} key={index}>
                            <img
                                src={member.image}
                                className={style.memberImage}
                            />
                            <span className={style.memberName}>
                                {member.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.department}>
                <h4>Program</h4>
                <ul>
                    {program.map((member, index) => (
                        <li className={style.member} key={index}>
                            <img
                                src={member.image}
                                className={style.memberImage}
                            />
                            <span className={style.memberName}>
                                {member.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.department}>
                <h4>Website & Media</h4>
                <ul>
                    {media.map((member, index) => (
                        <li className={style.member} key={index}>
                            <img
                                src={member.image}
                                className={style.memberImage}
                            />
                            <span className={style.memberName}>
                                {member.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.department}>
                <h4>Parallel Events</h4>
                <ul>
                    {parallel_events.map((member, index) => (
                        <li className={style.member} key={index}>
                            <img
                                src={member.image}
                                className={style.memberImage}
                            />
                            <span className={style.memberName}>
                                {member.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.department}>
                <h4>Chair</h4>
                <ul>
                    {chair.map((member, index) => (
                        <li className={style.member} key={index}>
                            <img
                                src={member.image}
                                className={style.memberImage}
                            />
                            <span className={style.memberName}>
                                {member.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
