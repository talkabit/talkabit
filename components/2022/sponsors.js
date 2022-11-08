import React from 'react'
import style from '../../styles/2022/Sponsors.module.css'

let SponsorSizes = {
    main: 500,
    gold: 400,
    silver: 200,
    bronze: 100,
}

let sponsors = {
    main: [
        {
            src: '/2022/assets/sponsors/switch.png',
            href: 'https://switchpayments.com/',
        },
    ],
    gold: [
        {
            src: '/2022/assets/sponsors/jscrambler.png',
            href: 'https://jscrambler.com/',
        },
        {
            src: '/2022/assets/sponsors/inovaria.png',
            href: 'https://www.inova-ria.pt/',
            too_big: true,
        },
        {
            src: '/2022/assets/sponsors/fractal.png',
            href: 'https://protocol.fractal.id/',
            too_big: true,
        },
    ],
    silver: [
        {
            src: '/2022/assets/sponsors/worten.png',
            href: 'https://worten.pt/',
        },
        {
            src: '/2022/assets/sponsors/fmq.png',
            href: 'https://www.fabamaq.com/',
        },
    ],
    bronze: [
        {
            src: '/2022/assets/sponsors/msglife.png',
            href: 'https://www.msg-life.pt/',
        },
    ],
}
export default function Sponsors({ refProp }) {
    return (
        <section id={style.sponsors} ref={refProp}>
            <h2>Sponsors</h2>
            <div className="sectionContent">
                {Object.keys(sponsors).map((tier, i) => (
                    <div className={style.sponsorTier} id={style[tier]} key={i}>
                        <h3>{tier.toUpperCase()}</h3>
                        <ul className={style.sponsorList}>
                            {sponsors[tier].map((sponsor, ignore) => (
                                <a
                                    key={ignore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={sponsor.href}
                                    className={style.sponsor}
                                >
                                    <img
                                        className={style.sponsorImage}
                                        src={sponsor.src}
                                        width={
                                            SponsorSizes[tier] /
                                            ('too_big' in sponsor ? 1.6 : 1)
                                        }
                                    />
                                </a>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
