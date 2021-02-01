import React from "react";

import AboutStyles from "../../styles/about.module.css";


const About = () => (

    <div className={AboutStyles.aboutContainer}>
        <div className={AboutStyles.text}>
            <h2 className={AboutStyles.titleLeft}>About us</h2>
            <p>
                Talk a Bit is a student-organised conference with a focus on the multiple facets of technology.
                This year, we will explore the social impact of technology. How does it shape our lives?
                What can we do to seize its potential? How can technology turn against us?
                These are some of the questions we will tackle with the help of prominent figures in the academic and industrial field, through talks and a panel discussion.
            </p>
            <p>
                You&apos;ll also have the chance to participate in networking and interview sessions with our sponsors.
                For those who want to get their hands dirty, sign up for our hackathon and show us how you can contribute to a better world.
            </p>
            <p>
                For the first time in the Talk a Bit&apos;s history, the event will be fully remote. Join us for free while we talk a bit about technology!
            </p>
        </div>
    </div>
);

export default About;
