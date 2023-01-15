import React from 'react'
import style from '../styles/Register.module.css'

export default function Register() {
    return (
        <div className={style.background}>
            <div className={style.register}>
                <p className={style.p0}>Did we convince you already?</p>
                <a
                    href="https://hello.last2ticket.com/event/4844"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="register-btn"
                        style={{ margin: '0.5rem 1rem' }}
                    >
                        Register Now
                    </button>
                </a>
                <a
                    href="https://www.hackerrank.com/talkabit23"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="register-btn"
                        style={{ margin: '0.5rem 1rem' }}
                    >
                        Hackathon Register
                    </button>
                </a>
            </div>
        </div>
    )
}
