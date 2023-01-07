import React from 'react'
import style from '../styles/Landing.module.css'
import dynamic from 'next/dynamic'
import LogoEd from '../public/assets/tab_ed.svg'

export default function Landing() {
    const FINAL_DAY_IN_MS = new Date(2023, 0, 28).getTime() - 3600000

    const DynamicTime = dynamic(() => import('../hooks/CountdownTimer'))

    return (
        <div className={style.background}>
            <div className={style.sketch}></div>
            <div className={style.landing}>
                <div className={style.content}>
                    <LogoEd className={style.logo} />
                    <p className={style.p1}>
                        11th Conference Edition | FEUP, PORTO
                    </p>
                    <p className={style.p2}>28th January 2023</p>
                </div>
                <div className={style.landingCountdown}>
                    <DynamicTime targetDate={FINAL_DAY_IN_MS} />
                </div>
            </div>
        </div>
    )
}
