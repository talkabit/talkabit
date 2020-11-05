import React from "react";

import Seo from "../components/seo";

import img from "../images/coming_soon.png"

const ComingSoon = () => (
    <div>
        <Seo title="Coming Soon" />
        <div className="text-container">
            <h2>Talk a Bit 2021</h2>
            <h3>FEB 12 & 13</h3>
            <h2>Let's talk a bit about technology.</h2>
            <h4>A student-organized interactive online experience, free for everyone. More details soon.</h4>
            <p>Contact us at <a className="email" href="www.google.com">geral@talkabit.org</a></p>
            <p><a href="www.google.com">Check out last year's edition here.</a></p>
        </div>
        <img src={img}/>
    </div>
);

export default ComingSoon;
