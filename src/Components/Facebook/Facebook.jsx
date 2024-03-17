import React from "react";
import './Facebook.css';

function Facebook() {
    return (
        <div style={{ width: '100%' }} className="mb-3" >
            <button style={{ width: '100%' }} type="button" className="gsi-material-button fb-login-button" id="facebook-signin-button" data-width="" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="false">
                <i className='bx bxl-facebook facebook-icon'></i>
                Sign in with Facebook
            </button>
        </div>

    );
}

export default Facebook;