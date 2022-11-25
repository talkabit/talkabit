import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../public/assets/tab.svg'
import SmallLogo from '../public/assets/tab_social_blue.svg'
import LinkedinLogo from '../public/assets/linkedin.svg'
import InstagramLogo from '../public/assets/instagram.svg'
import FacebookLogo from '../public/assets/facebook.svg'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function Topbar({ editionsRef }) {
    const [isNavCollapsed, setIsNavCollapsed] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const handleNavCollapse = () => {
        // console.log('toggle')
        setIsNavCollapsed(!isNavCollapsed)
        // console.log(isScrolled)
    }

    const changeNavbarColor = () => {
        if (window.scrollY >= 50) {
            // console.log(window.scrollY)
            // console.log('scroll')
            setIsScrolled(true)
        } else {
            // console.log(window.scrollY)
            // console.log('not scroll')
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        changeNavbarColor()
        window.addEventListener('scroll', changeNavbarColor)
    }, [])

    // useEffect(() => {
    //     window.onscroll = () => {
    //         if (window.scrollY > 50) {
    //             setIsScrolled(true)
    //             console.log('scrolled')
    //         } else {
    //             setIsScrolled(false)
    //             console.log('not scrolled')
    //         }
    //     }
    // }, [])

    return (
        <nav
            className={`${
                // isNavCollapsed
                //     ? 'navbar navbar-expand-lg fixed-top navbar-light navcol'
                //     : 'navbar navbar-expand-lg fixed-top navbar-light'
                isNavCollapsed && !isScrolled
                    ? 'navbar navbar-expand-lg container-fluid bd-gutter flex-wrap flex-lg-nowrap fixed-top navbar-light navcol'
                    : isNavCollapsed && isScrolled
                    ? 'navbar navbar-expand-lg container-fluid bd-gutter flex-wrap flex-lg-nowrap fixed-top navbar-light navcol navscro'
                    : !isNavCollapsed && !isScrolled
                    ? 'navbar navbar-expand-lg container-fluid bd-gutter flex-wrap flex-lg-nowrap fixed-top navbar-light'
                    : 'navbar navbar-expand-lg container-fluid bd-gutter flex-wrap flex-lg-nowrap fixed-top navbar-light navscro'
            }`}
        >
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="/">
                    <Logo width={200} height={100} />
                </a> */}
                <button
                    className={`${
                        isNavCollapsed
                            ? 'navbar-toggler d-none'
                            : 'navbar-toggler custom-toggler'
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <button
                    className={`${
                        isNavCollapsed
                            ? 'navbar-toggler'
                            : 'navbar-toggler d-none'
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                    style={{ width: '56px', height: '40px' }}
                >
                    {/* <span style={{ color: '#343a40' }}> X </span> */}
                    <span className="btn-close btn-close-white"></span>
                </button>

                <Link href="/">
                    <a
                        className={`${
                            isNavCollapsed
                                ? 'navbar-brand d-lg-none d-xl-none float-center'
                                : 'navbar-brand d-none'
                        }`}
                        style={{
                            marginRight: '-12px',
                            marginBottom: '-40px',
                            marginTop: '-30px',
                        }}
                    >
                        <SmallLogo
                            style={{
                                width: '15vh',
                                height: '15vh',
                                viewBox: '260 35 400 400',
                                preserveAspectRatio: 'none',
                            }}
                        />
                    </a>
                </Link>
                <Link href="/">
                    <a className="navbar-brand d-none d-lg-block">
                        <Logo width={200} height={100} />
                    </a>
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul
                        className={`${
                            isNavCollapsed
                                ? 'navbar-nav bd-navbar-nav'
                                : 'navbar-nav flex-row flex-wrap bd-navbar-nav'
                        }`}
                    >
                        <hr className="d-lg-none text-white-50" />
                        <li
                            className={`${
                                isNavCollapsed
                                    ? 'nav-item'
                                    : 'nav-item col-6 col-lg-auto'
                            }`}
                        >
                            <a
                                className={`${
                                    isNavCollapsed
                                        ? 'nav-link text-white disabled'
                                        : 'nav-link py-2 px-0 px-lg-2 text-white disabled'
                                }`}
                                // aria-current="true"
                                href="#"
                            >
                                Speakers
                            </a>
                        </li>
                        <hr className="d-lg-none text-white-50" />
                        <li
                            className={`${
                                isNavCollapsed
                                    ? 'nav-item'
                                    : 'nav-item col-6 col-lg-auto'
                            }`}
                        >
                            <a
                                className={`${
                                    isNavCollapsed
                                        ? 'nav-link px-lg-2 text-white disabled'
                                        : 'nav-link py-2 px-0 px-lg-2 text-white disabled'
                                }`}
                                href="#"
                            >
                                Agenda
                            </a>
                        </li>
                        <hr className="d-lg-none text-white-50" />
                        <li
                            className={`${
                                isNavCollapsed
                                    ? 'nav-item'
                                    : 'nav-item col-6 col-lg-auto'
                            }`}
                        >
                            <a
                                className={`${
                                    isNavCollapsed
                                        ? 'nav-link px-lg-2 text-white disabled'
                                        : 'nav-link py-2 px-0 px-lg-2 text-white disabled'
                                }`}
                                href="#"
                            >
                                Sponsors
                            </a>
                        </li>
                        <hr className="d-lg-none text-white-50" />
                        <li
                            className={`${
                                isNavCollapsed
                                    ? 'nav-item'
                                    : 'nav-item col-6 col-lg-auto'
                            }`}
                            onClick={() => scrollToRef(editionsRef)}
                        >
                            <a
                                className={`${
                                    isNavCollapsed
                                        ? 'nav-link px-lg-2 text-white'
                                        : 'nav-link py-2 px-0 px-lg-2 text-white'
                                }`}
                                href="#"
                                // target="_blank"
                                // rel="noopener"
                            >
                                Previous Editions
                            </a>
                        </li>
                    </ul>
                    <hr className="d-lg-none text-white-50" />
                    <ul
                        className={`${
                            isNavCollapsed
                                ? 'navbar-nav flex-row flex-wrap row justify-content-center'
                                : 'navbar-nav flex-row flex-wrap ms-md-auto'
                        }`}
                    >
                        <li
                            className={`${
                                isNavCollapsed
                                    ? 'nav-item d-inline col-2'
                                    : 'nav-item d-inline'
                            }`}
                        >
                            <a
                                className="nav-link py-2 px-0 px-lg-2"
                                href="https://www.instagram.com/talkabit/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <InstagramLogo
                                    width="20"
                                    height="20"
                                    className="navbar-nav-svg"
                                    fill="white"
                                />
                            </a>
                        </li>
                        <li
                            className={`${
                                isNavCollapsed
                                    ? 'nav-item d-inline col-2'
                                    : 'nav-item d-inline'
                            }`}
                        >
                            <a
                                className="nav-link py-2 px-0 px-lg-2"
                                href="https://www.facebook.com/talkabit/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FacebookLogo
                                    width="20"
                                    height="20"
                                    className="navbar-nav-svg"
                                    fill="white"
                                />
                            </a>
                        </li>
                        <li
                            className={`${
                                isNavCollapsed
                                    ? 'nav-item d-inline col-2'
                                    : 'nav-item d-inline'
                            }`}
                        >
                            <a
                                className="nav-link py-2 px-0 px-lg-2"
                                href="https://pt.linkedin.com/company/talkabit"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedinLogo
                                    width="20"
                                    height="20"
                                    className="navbar-nav-svg"
                                    fill="white"
                                />
                            </a>
                        </li>
                        <hr className="d-lg-none text-white-50" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}
