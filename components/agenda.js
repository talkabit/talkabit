import React from 'react'

export default function agenda() {
    return (
        <div className="agendaBackground">
            <section
                className="agenda"
                data-bs-spy="scroll"
                data-bs-target="#topbar"
                data-bs-offset="130"
                tabIndex="0"
            >
                <h3 id="agendaRef">Agenda</h3>
                <div className="container text-center"></div>
            </section>
        </div>
    )
}
