import React from "react";

const Newsletter = () => {
    //return <iframe frameborder="0" style="height:500px;width:99%;border:none;" src='https://forms.zohopublic.eu/talkabitorg/form/NewsletterSignUp/formperma/c2fD9XzfU2PSQYE0SiwJbm9Xipi5uniihXc8dWAoC_4' />;
    return (
        <form action='https://forms.zohopublic.eu/talkabitorg/form/NewsletterSignUp/formperma/c2fD9XzfU2PSQYE0SiwJbm9Xipi5uniihXc8dWAoC_4/htmlRecords/submit' name='form' id='form' method='POST' accept-charset='UTF-8' enctype='multipart/form-data'>
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="" />
            <input type="hidden" name="zc_gad" value="" />
            <h2>Newsletter Sign Up</h2>
            <p></p>
            <label>Email<em>*</em></label>
            <input type="text" maxlength="255" name="Email" />
            <button type="submit"><em>Submit</em></button>
        </form>
    )
};

export default Newsletter;
