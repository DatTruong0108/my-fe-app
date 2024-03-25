import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './LoginForm.css';
import data from "../../utils/phone-prefixes.json";
import Google from "./Google/Google";
import Facebook from "./Facebook/Facebook";

function LoginForm() {
    const prefixes = data.prefixes;
    const [selectedPrefix, setSelectedPrefix] = useState(prefixes[0]);

    let [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handlePrefixSelect = (prefix) => {
        setSelectedPrefix(prefix);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        setPhoneError('');    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(phone === '') {
            // console.log('phone is empty');
            setPhoneError('Điền đầy đủ thông tin trước khi đăng nhập!');
        }

        if(password === '') {
            // console.log('password is empty');
            setPasswordError('Điền đầy đủ thông tin trước khi đăng nhập!');
        }

        if(phone !== '' && password !== '') {
            const phonePattern = /^[0-9]$/;
            if(!phonePattern.test(phone)) {
                setPhoneError('Số điện thoại không hợp lệ!');
                return;
            } 

            // remove first number of phone number
            const phoneNum = phone.slice(1);
            phone = phoneNum;
            
            alert('Đăng nhập thành công!\nSố điện thoại: ' + selectedPrefix + phone + ', Mật khẩu: ' + password);
        }
    }

    return (
        <div className="container">
            <div className="left-panel"></div>
            <div className='login-form card'>
                <form className='form' style={{ width: '100%' }} onSubmit={handleSubmit}>
                    <h5 className="mt-3" style={{ textAlign: 'center' }}>Đăng nhập</h5>
                    <div className='in-form'>
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
                            <input autoFocus type='text' placeholder='Nhập số điện thoại' className={`form-control input-number ${phoneError ? 'error-input' : ''}`} 
                                id='phone-number' maxLength={10} value={phone} onChange={handlePhoneChange} />
                        </div>
                        {phoneError && <div className="error-message">{phoneError}</div>}
                        <div className='mb-1'>
                            <label htmlFor='password' className='form-label'>Mật khẩu <span style={{ color: 'red' }}>*</span></label>
                            <input type='password' className={`form-control ${passwordError ? 'error-input' : ''}`} 
                                id='password' value={password} onChange={handlePasswordChange} />
                        </div>
                        {passwordError && <div className="error-message">{passwordError}</div>}
                    </div>
                    <div className='mt-3 forgot-password-text'>
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
                    <span className='register-link'>Bạn chưa có tài khoản? <a href='#' style={{ color: '#39ace2', textAlign: 'center' }}>Đăng ký</a></span>
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