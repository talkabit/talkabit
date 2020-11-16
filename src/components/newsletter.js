import React from "react";

const Newsletter = () =>
    (
        <form
            action="https://tinyurl.com/y5lwmlmt"
            name="form"
            id="form"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
        >
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="" />
            <input type="hidden" name="zc_gad" value="" />
            <h2>Newsletter Sign Up</h2>
            <p />
            <label>
                Email
                <em>*</em>
            </label>
            <input type="text" maxLength="255" name="Email" />
            <button type="submit">
                <em>Submit</em>
            </button>
        </form>
    )
;

export default Newsletter;
