import React from 'react'
import DateTimeDisplay from '../hooks/DateTimeDisplay'
import { useCountdown } from '../hooks/useCountdown'
import style from '../styles/Landing.module.css'

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className={style.showCounter}>
            <DateTimeDisplay value={days} type={'Days'} />
            {/* <p>:</p> */}
            <DateTimeDisplay value={hours} type={'Hours'} />
            {/* <p>:</p> */}
            <DateTimeDisplay value={minutes} type={'Mins'} />
            {/* <p>:</p> */}
            <DateTimeDisplay value={seconds} type={'Seconds'} />
        </div>
    )
}

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate)

    return (
        <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    )
}

export default CountdownTimer
