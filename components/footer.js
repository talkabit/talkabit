import React from 'react'
import style from '../styles/Footer.module.css'
import LinkedinLogo from '../public/assets/linkedin.svg'
import InstagramLogo from '../public/assets/instagram.svg'
import FacebookLogo from '../public/assets/facebook.svg'

export default function Footer() {
    return (
        <div className={style.background}>
            <div className={style.footer}>
                <div className={style.content}>
                    <a
                        href="https://hello.last2ticket.com/event/4844"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="register-btn">Register Now</button>
                    </a>
                    <p style={{ marginBottom: '0' }}>
                        Copyright © 2023 Talk a Bit. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}
