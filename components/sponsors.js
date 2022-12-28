import React from 'react'

export default function sponsors() {
    let goldSponsors = [
        {
            name: 'Critical Manufacturing',
            link: 'https://www.criticalmanufacturing.com/',
            image: '/assets/sponsors/critical_manufacturing_blue.svg',
        },
        // {
        //     name: 'xelerate.tech',
        //     link: 'https://www.xelerate.tech/',
        //     image: '/assets/sponsors/xelerate_tech.png',
        // },
    ]

    let silverSponsors = [
        {
            name: 'Accenture',
            link: 'https://www.accenture.com/pt-pt',
            image: '/assets/sponsors/accenture_black.svg',
        },
        {
            name: 'Critical TechWorks',
            link: 'https://www.criticaltechworks.com/',
            image: '/assets/sponsors/critical_techworks_blue.svg',
        },
        {
            name: 'Deloitte',
            link: 'https://www2.deloitte.com/pt/pt.html',
            image: '/assets/sponsors/deloitte.png',
        },
        {
            name: 'INESCTEC',
            link: 'https://www.inesctec.pt/pt',
            image: '/assets/sponsors/inesctec.png',
        },
        {
            name: 'Worten',
            link: 'https://www.worten.pt/',
            image: '/assets/sponsors/worten.svg',
        },
    ]

    let bronzeSponsors = [
        {
            name: 'Zoom',
            link: 'https://zoom.us/',
            image: '/assets/sponsors/zoom.svg',
        },
    ]

    return (
        <div className="sponsorsBackground">
            <section
                className="sponsors"
                data-bs-spy="scroll"
                data-bs-target="#topbar"
                data-bs-offset="130"
                tabIndex="0"
            >
                <h3 id="sponsorsRef">Sponsors</h3>
                {/* <div className="platinumSponsor">
                    <h4>Platinum Sponsor</h4>
                    <div className="image_container">
                        <img src="/assets/sponsors/grab.svg" />
                    </div>
                </div> */}
                <div className="goldSponsor">
                    <h4>Gold Sponsor</h4>
                    <div className="gold_container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                            {goldSponsors.map((sponsor, index) => (
                                <div className="col" key={index}>
                                    <a
                                        href={sponsor.link}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img src={sponsor.image} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="silverSponsor">
                    <h4>Silver Sponsor</h4>
                    <div className="silver_container">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                            {silverSponsors.map((sponsor, index) => (
                                <div className="col" key={index}>
                                    <a
                                        href={sponsor.link}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img src={sponsor.image} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className="bronzeSponsor">
                    <h4>Bronze Sponsor</h4>
                    <div className="bronze_container">
                        <div className="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-4">
                            {bronzeSponsors.map((sponsor, index) => (
                                <div className="col" key={index}>
                                    <a
                                        href={sponsor.link}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img src={sponsor.image} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </section>
        </div>
    )
}