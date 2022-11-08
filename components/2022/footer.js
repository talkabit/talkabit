import React from 'react'
import style from '../../styles/2022/Footer.module.css'
import Linkedin from '../../public/2022/assets/linkedin.svg'
import Instagram from '../../public/2022/assets/instagram.svg'
import Facebook from '../../public/2022/assets/facebook.svg'

export default function Footer() {
    return (
        <div className={style.background}>
            <div className={style.footer}>
                <div className={style.content}>
                    <a
                        href="https://www.eventbrite.pt/e/talk-a-bit-2022-edition-tickets-226604800057"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="register-btn">REGISTER NOW</button>
                    </a>
                    <ul className={style.socials}>
                        <a
                            href="https://www.instagram.com/talkabit/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram fill="white" width={40} height={40} />
                        </a>
                        <a
                            href="https://www.facebook.com/talkabit/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Facebook fill="white" width={40} height={40} />
                        </a>
                        <a
                            href="https://pt.linkedin.com/company/talkabit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin fill="white" width={40} height={40} />
                        </a>
                    </ul>
                    <p>Copyright © 2021 Talk a Bit. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
