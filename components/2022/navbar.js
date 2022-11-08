import React, { useEffect, useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'
import style from '../../styles/2022/Navbar.module.css'
import Logo from '../../public/2022/assets/logo.svg'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function NavigationBar({
    speakersRef,
    agendaRef,
    sponsorsRef,
    editionsRef,
}) {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 400) setIsScrolled(true)
            else setIsScrolled(false)
        }
    }, [])

    const toggle = () => setIsOpen(!isOpen)
    return (
        <div>
            <Navbar
                expand="md"
                id={style.navbar}
                className={`${isScrolled ? style.darkNavbar : ''} ${
                    isOpen ? style.open : style.closed
                }`}
            >
                <NavbarBrand href="/">
                    <Logo className={style.logo} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} id={style.navbarToggler} />
                <Collapse isOpen={isOpen} id={style.navbarToggler} navbar>
                    <Nav className="ml-auto" id={style.navList} navbar>
                        {isScrolled && (
                            <NavItem
                                className={style.navItem}
                                id={style.registerButton}
                            >
                                <NavLink
                                    href="https://www.eventbrite.pt/e/talk-a-bit-2022-edition-tickets-226604800057"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={style.navLink}
                                >
                                    <button
                                        id={style.registerNav}
                                        className="register-btn"
                                    >
                                        REGISTER NOW
                                    </button>
                                </NavLink>
                            </NavItem>
                        )}
                        <NavItem
                            className={style.navItem}
                            onClick={() => scrollToRef(speakersRef)}
                        >
                            <NavLink className={style.navLink} href="#">
                                Speakers
                            </NavLink>
                        </NavItem>
                        <NavItem
                            className={style.navItem}
                            onClick={() => scrollToRef(agendaRef)}
                        >
                            <NavLink className={style.navLink} href="#">
                                Agenda
                            </NavLink>
                        </NavItem>
                        <NavItem
                            className={style.navItem}
                            onClick={() => scrollToRef(sponsorsRef)}
                        >
                            <NavLink className={style.navLink} href="#">
                                Sponsors
                            </NavLink>
                        </NavItem>
                        <NavItem
                            className={style.navItem}
                            onClick={() => scrollToRef(editionsRef)}
                        >
                            <NavLink className={style.navLink} href="#">
                                Previous Editions
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
