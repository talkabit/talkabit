import React from 'react'
import Link from 'next/link'

export default function sponsors({ refProp }) {
    return (
        <div className="sponsorsBackground">
            <section className="sponsors" ref={refProp}>
                <h3>Sponsors</h3>
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
                            <Link
                                href="https://www.criticalmanufacturing.com/"
                                style={{ textDecoration: 'none' }}
                            >
                                <img src="/assets/sponsors/critical_manufacturing.png" />
                            </Link>
                        </div>

                        {/* </div> */}
                    </div>
                </div>
                <div className="silverSponsor">
                    <h4>Silver Sponsor</h4>
                    <div className="silver_container">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                            <div className="col">
                                <Link
                                    href="https://www.accenture.com/pt-pt"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <img src="/assets/sponsors/accenture.png" />
                                </Link>
                            </div>
                            <div className="col">
                                <Link
                                    href="https://www.criticaltechworks.com/"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <img src="/assets/sponsors/critical_techworks.svg" />
                                </Link>
                            </div>
                            <div className="col">
                                <Link
                                    href="https://www.worten.pt/"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <img src="/assets/sponsors/worten.svg" />
                                </Link>
                            </div>
                            <div className="col">
                                <Link
                                    href="https://www.inesctec.pt/pt"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <img src="/assets/sponsors/inesctec.svg" />
                                </Link>
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
