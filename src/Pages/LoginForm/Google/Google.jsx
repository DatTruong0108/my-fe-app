import React from "react";
import './Google.css';

function Google() {
    return (
        <div style={{width: '100%'}} className="mb-3 mt-2">
            <button style={{width: '100%'}} type="button" className="gsi-material-button google-button" id="google-signin-button">
                <div className="gsi-material-button-state"></div>
                <div className="gsi-material-button-content-wrapper google-text">
                    {/* <i className="bx bxl-google google-icon"></i> */}
                    {/* <span style={{ marginRight: '1px' }}></span> */}
                    <img src="/assets/images/google.png" alt="" /> <span className="sign-in-gg-text">Sign in with Google</span>
                </div>
            </button>
        </div>
    );
}

export default Google;