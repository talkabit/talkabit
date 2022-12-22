import React from 'react'

export default function sponsors() {
    return (
        <div className="sponsorsBackground">
            <section
                className="sponsors"
                data-bs-spy="scroll"
                data-bs-target="#topbar"
                data-bs-offset="0"
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
                        {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2"> */}
                        {/* descomentar quando houver mais */}
                        <div className="col">
                            <a
                                href="https://www.criticalmanufacturing.com/"
                                style={{ textDecoration: 'none' }}
                            >
                                <img src="/assets/sponsors/critical_manufacturing.png" />
                            </a>
                        </div>

                        {/* </div> */}
                    </div>
                </div>
                <div className="silverSponsor">
                    <h4>Silver Sponsor</h4>
                    <div className="silver_container">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                            <div className="col">
                                <a
                                    href="https://www.accenture.com/pt-pt"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <img src="/assets/sponsors/accenture.png" />
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://www.criticaltechworks.com/"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <img src="/assets/sponsors/critical_techworks.svg" />
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://www.worten.pt/"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <img src="/assets/sponsors/worten.svg" />
                                </a>
                            </div>
                            <div className="col">
                                <a
                                    href="https://www.inesctec.pt/pt"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <img src="/assets/sponsors/inesctec.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="bronzeSponsor">
                    <h4>Bronze Sponsor</h4>
                    <div className="bronze_container">
                        <div className="row row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-3">
                            <div className="col">
                                <img src="/assets/sponsors/zoom.svg" />
                            </div>
                            <div className="col">
                                <img src="/assets/sponsors/zoom.svg" />
                            </div>
                            <div className="col">
                                <img src="/assets/sponsors/zoom.svg" />
                            </div>
                            <div className="col">
                                <img src="/assets/sponsors/zoom.svg" />
                            </div>
                            <div className="col">
                                <img src="/assets/sponsors/zoom.svg" />
                            </div>
                            <div className="col">
                                <img src="/assets/sponsors/zoom.svg" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        </div>
    )
}
