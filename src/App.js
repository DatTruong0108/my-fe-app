import React, { useState } from 'react';
import './App.css';
import './bootstrap-5.3.2-dist/css/bootstrap.min.css';
import data from './utils/phone-prefixes.json';
import Google from './Components/Google/Google';
import Facebook from './Components/Facebook/Facebook';

// trang login sau khi bấm -> quản lý acc
// menu: quản lý acc + quản lý kênh 
// quản lý acc: thêm sửa xóa dữ liệu (lưu = cass - TablePlus (quản lý cass) và select elasticsearch)
// docker -> set up Kibana để hiển thị elasticsearch
// quản lý kênh: ng dùng enter id kênh -> backend call API của yt để lấy thông tin kênh -> lưu số liệu lại
// detail kênh: theo thiết kế

function App() {
  const prefixes = data.prefixes;
  const [selectedPrefix, setSelectedPrefix] = useState(prefixes[0]);

  const handlePrefixSelect = (prefix) => {
    setSelectedPrefix(prefix);
  };

  return (
    <div className="container text-center">
      <div className="left-panel"></div>
      <div className='login-form card'>
        <form className='form' style={{ width: '85%' }}>
          <h3 style={{ textAlign: 'center' }}>Đăng nhập</h3>
          <div className='mb-3 mt-4'>
            <label htmlFor='username' className='form-label'>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
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
              <input type='text' placeholder='Nhập số điện thoại' className='form-control' id='phone-number' />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Mật khẩu <span style={{ color: 'red' }}>*</span></label>
              <input type='password' className='form-control' id='password' />
            </div>
          </div>
          <div className='forgot-password-text'>
            <a href='#' style={{ color: 'red' }}>Quên mật khẩu</a>
          </div>
          <div className="form-group mt-4">
            <div id="form-message mt-2 mb-2"></div>
            <button style={{ backgroundColor: '#ba3838', color: 'black' }} type="submit" className="btn btn-warning submit-btn text-light">Đăng nhập</button>
          </div>
          <div className='mb-3 text-center'>
            <span style={{ color: 'rgba(123, 129, 129, 0.614)', fontSize: 'small' }}>Hoặc</span>
          </div>
          <Google />
          <Facebook />
          <span className='register-link'>Bạn chưa có tài khoản? <a href='#' style={{ color: 'blue', textAlign: 'center' }}>Đăng ký</a></span>
        </form>
      </div>
      <div className="right-panel"></div>
    </div>
  );
}

export default App;
