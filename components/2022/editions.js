import React from 'react'
import style from '../../styles/2022/Editions.module.css'

export default function Editions({ refProp }) {
    return (
        <section id={style.editions} ref={refProp}>
            <h3>Checkout our Latest Editions</h3>
            <ul id={style.editionsList}>
                <button className="edition-btn">
                    <a href="/2021">2021</a>
                </button>
                <button className="edition-btn">
                    <a href="/2020">2020</a>
                </button>
                <button className="edition-btn">
                    <a href="/2019">2019</a>
                </button>
                <button className="edition-btn">
                    <a href="/2018">2018</a>
                </button>
                <button className="edition-btn">
                    <a href="/2017">2017</a>
                </button>
                <button className="edition-btn">
                    <a href="/2016">2016</a>
                </button>
                <button className="edition-btn">
                    <a href="/2015">2015</a>
                </button>
                <button className="edition-btn">
                    <a href="/2014">2014</a>
                </button>
                <button className="edition-btn">
                    <a href="/2013">2013</a>
                </button>
            </ul>
        </section>
    )
}
