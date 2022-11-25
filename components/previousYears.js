import React from 'react'
import Link from 'next/link'

export default function previousYears({ refProp }) {
    return (
        <div className="yearsBackground">
            <section className="previousYears" ref={refProp}>
                <h3>Previous Editions</h3>

                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                        <div className="col">
                            <Link
                                href="/2022"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="parent_container">
                                    <div className="image_container">
                                        <img src="/2022/assets/porto.svg" />
                                    </div>
                                    <div className="edition_container">
                                        <p className="p1">2022</p>
                                        <p className="p2">10th edition</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <a href="/2021" style={{ textDecoration: 'none' }}>
                                <div className="parent_container">
                                    <div className="image_container">
                                        <img src="/assets/background_2021.png" />
                                    </div>
                                    <div className="edition_container">
                                        <p className="p1">2021</p>
                                        <p className="p2">9th edition</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="/2020" style={{ textDecoration: 'none' }}>
                                <div className="parent_container">
                                    <div className="image_container">
                                        <img src="/assets/background_2020.jpeg" />
                                    </div>
                                    <div className="edition_container">
                                        <p className="p1">2020</p>
                                        <p className="p2">8th edition</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="/2019" style={{ textDecoration: 'none' }}>
                                <div className="parent_container">
                                    <div className="image_container">
                                        <img src="/assets/background_2019.png" />
                                    </div>
                                    <div className="edition_container">
                                        <p className="p1">2019</p>
                                        <p className="p2">7th edition</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="/2018" style={{ textDecoration: 'none' }}>
                                <div className="parent_container">
                                    <div className="image_container">
                                        <img src="/assets/background_2018.png" />
                                    </div>
                                    <div className="edition_container">
                                        <p className="p1">2018</p>
                                        <p className="p2">6th edition</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="/2017" style={{ textDecoration: 'none' }}>
                                <div className="parent_container">
                                    <div className="image_container">
                                        <img src="/assets/background_2017.jpg" />
                                    </div>
                                    <div className="edition_container">
                                        <p className="p1">2017</p>
                                        <p className="p2">5th edition</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="/2016" style={{ textDecoration: 'none' }}>
                                <div className="parent_container">
                                    <div className="image_container">
                                        <img src="/assets/background_2016.jpg" />
                                    </div>
                                    <div className="edition_container">
                                        <p className="p1">2016</p>
                                        <p className="p2">4th edition</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="/2015" style={{ textDecoration: 'none' }}>
                                <div className="parent_container">
                                    <div className="image_container">
                                        <img src="/assets/background_2015.png" />
                                    </div>
                                    <div className="edition_container">
                                        <p className="p1">2015</p>
                                        <p className="p2">3rd edition</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="/2014" style={{ textDecoration: 'none' }}>
                                <div className="parent_container">
                                    <div className="image_container">
                                        <img src="/assets/background_2014.jpg" />
                                    </div>
                                    <div className="edition_container">
                                        <p className="p1">2014</p>
                                        <p className="p2">2nd edition</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="/2013" style={{ textDecoration: 'none' }}>
                                <div className="parent_container">
                                    <div className="image_container">
                                        <img src="/assets/background_2013.png" />
                                    </div>
                                    <div className="edition_container">
                                        <p className="p1">2013</p>
                                        <p className="p2">1tst edition</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
