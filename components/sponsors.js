import React from 'react'

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
                            <img src="/assets/sponsors/critical_manufacturing.png" />
                        </div>

                        {/* </div> */}
                    </div>
                </div>
                <div className="silverSponsor">
                    <h4>Silver Sponsor</h4>
                    <div className="silver_container">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                            <div className="col">
                                <img src="/assets/sponsors/accenture.png" />
                            </div>
                            <div className="col">
                                <img src="/assets/sponsors/critical_techworks.svg" />
                            </div>
                            <div className="col">
                                <img src="/assets/sponsors/worten.svg" />
                            </div>
                            <div className="col">
                                <img src="/assets/sponsors/inesctec.svg" />
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