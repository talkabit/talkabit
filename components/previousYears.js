import React from 'react'
import Link from 'next/link'

export default function previousYears() {
    let previousEd = [
        {
            year: '2021',
            edition: '9th edition',
            link: '/2021',
            image: '/assets/backgrounds/background_2021.png',
        },
        {
            year: '2020',
            edition: '8th edition',
            link: '/2020',
            image: '/assets/backgrounds/background_2020.jpeg',
        },
        {
            year: '2019',
            edition: '7th edition',
            link: '/2019',
            image: '/assets/backgrounds/background_2019.png',
        },
        {
            year: '2018',
            edition: '6th edition',
            link: '/2018',
            image: '/assets/backgrounds/background_2018.png',
        },
        {
            year: '2017',
            edition: '5th edition',
            link: '/2017',
            image: '/assets/backgrounds/background_2017.jpg',
        },
        {
            year: '2016',
            edition: '4th edition',
            link: '/2016',
            image: '/assets/backgrounds/background_2016.jpg',
        },
        {
            year: '2015',
            edition: '3rd edition',
            link: '/2015',
            image: '/assets/backgrounds/background_2015.png',
        },
        {
            year: '2014',
            edition: '2nd edition',
            link: '/2014',
            image: '/assets/backgrounds/background_2014.jpg',
        },
        {
            year: '2013',
            edition: '1st edition',
            link: '/2013',
            image: '/assets/backgrounds/background_2013.png',
        },
    ]

    return (
        <div className="yearsBackground">
            <section
                className="previousYears"
                data-bs-spy="scroll"
                data-bs-target="#topbar"
                data-bs-offset="130"
                tabIndex="0"
            >
                <h3 id="editionsRef">Previous Editions</h3>

                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                        <div className="col">
                            <Link
                                href="/2022"
                                style={{ textDecoration: 'none' }}
                            >
                                <a style={{ textDecoration: 'none' }}>
                                    <div className="parent_container">
                                        <div className="image_container">
                                            <img src="/2022/assets/porto.svg" />
                                        </div>
                                        <div className="edition_container">
                                            <p className="p1">2022</p>
                                            <p className="p2">10th edition</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>

                        {previousEd.map((edition, index) => (
                            <div className="col" key={index}>
                                <a
                                    href={edition.link}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className="parent_container">
                                        <div className="image_container">
                                            <img src={edition.image} />
                                        </div>
                                        <div className="edition_container">
                                            <p className="p1">{edition.year}</p>
                                            <p className="p2">
                                                {edition.edition}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
