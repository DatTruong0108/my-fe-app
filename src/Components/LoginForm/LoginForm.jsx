import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './LoginForm.css';
import data from "../../utils/phone-prefixes.json";
import Google from "../Google/Google";
import Facebook from "../Facebook/Facebook";

function LoginForm() {
    const prefixes = data.prefixes;
    const [selectedPrefix, setSelectedPrefix] = useState(prefixes[0]);

    const handlePrefixSelect = (prefix) => {
        setSelectedPrefix(prefix);
    };

    return (
        <div className="container container-fluid">
            <div className="left-panel"></div>
            <div className='login-form card'>
                <form className='form' style={{ width: '100%' }}>
                    <h5 style={{ textAlign: 'center' }}>Đăng nhập</h5>
                    <div className='mb-3 mt-3'>
                        <label htmlFor='phone-number' className='form-label'>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                        <div className='input-group mb-3'>
                            <div className="dropdown">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedPrefix}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {prefixes.map(prefix => (
                                        <li key={prefix}><a className="dropdown-item" href="#" onClick={() => handlePrefixSelect(prefix)}>{prefix}</a></li>
                                    ))}
                                </ul>
                            </div>
                            <input autoFocus type='text' placeholder='Nhập số điện thoại' className='form-control input-number' id='phone-number' />
                        </div>
                        <div className='mb-1'>
                            <label htmlFor='password' className='form-label'>Mật khẩu <span style={{ color: 'red' }}>*</span></label>
                            <input type='password' className='form-control' id='password' />
                        </div>
                    </div>
                    <div className='forgot-password-text'>
                        <a href='#' style={{ color: 'red' }}>Quên mật khẩu</a>
                    </div>
                    <div className="form-group mt-4">
                        <div id="form-message mt-2 mb-2"></div>
                        <button type="submit" className="btn submit-btn text-light">Đăng nhập</button>
                    </div>
                    <div className='mb-3 or-text text-center'>
                        <div className="separator"></div>
                        <div style={{ flex: '0 0 auto', margin: '0 10px', color: 'rgba(123, 129, 129, 0.614)', fontSize: 'small' }}>Hoặc</div>
                        <div className="separator"></div>
                    </div>
                    <Google />
                    <Facebook />
                    <span className='register-link'>Bạn chưa có tài khoản? <a href='#' style={{ color: 'rgb(46, 210, 210)', textAlign: 'center' }}>Đăng ký</a></span>
                </form>
            </div>
            <div className="right-panel">
                <div className="logo">
                    <h3> 
                        <img src="/assets/images/logo-space1.png" alt="logo" /> S P A C E <img src="/assets/images/one.png" alt="logo" />
                    </h3>
                    <span className="title">Brand Manager</span>
                </div>
            </div>
        </div>
    );
}


export default LoginForm;