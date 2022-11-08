import React from 'react'
import style from '../../styles/2022/Hero.module.css'
import Porto from '../../public/2022/assets/porto.svg'
import Logo from '../../public/2022/assets/big-logo.svg'
import MobileLogo from '../../public/2022/assets/logo-mobile.svg'

export default function Hero() {
    return (
        <div className={style.background}>
            <div className={style.content}>
                <Logo id={style.logo} />
                <MobileLogo id={style.mobileLogo} />
                <p className={style.liveIn}>
                    LIVE IN <span className={style.location}>PORTO</span> |
                    JANUARY 15, 2022
                </p>
                <a
                    href="https://www.eventbrite.pt/e/talk-a-bit-2022-edition-tickets-226604800057"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="register-btn">REGISTER NOW</button>
                </a>
            </div>
            <Porto className={style.porto} />
        </div>
    )
}
