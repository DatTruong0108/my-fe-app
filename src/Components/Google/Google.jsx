import React from "react";
import './Google.css';

function Google() {
    return (
        <div style={{width: '100%'}} className="mb-3 mt-4">
            <button style={{width: '100%'}} type="button" className="gsi-material-button google-button" id="google-signin-button">
                <div className="gsi-material-button-state"></div>
                <div className="gsi-material-button-content-wrapper">
                    <div className="gsi-material-button-icon">
                    </div>
                    <i className="bx bxl-google google-icon"></i>
                    Sign in with Google
                </div>
            </button>
        </div>
    );
}

export default Google;