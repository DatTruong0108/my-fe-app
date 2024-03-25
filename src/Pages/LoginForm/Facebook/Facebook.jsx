import React from "react";
import './Facebook.css';

function Facebook() {
    return (
        <div style={{ width: '100%' }} className="mb-3" >
            <button style={{ width: '100%' }} type="button" className="fb-login-button" id="facebook-signin-button" data-width="" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="false">
                <img src="/assets/images/facebook.png" alt="" />
                <span style={{ marginRight: '8px' }}></span>
                <span className="ml-3 sign-in-fb-text">Sign in with Facebook</span>
            </button>
        </div>

    );
}

export default Facebook;