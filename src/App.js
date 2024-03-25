import React, { useEffect, useState } from "react";

import LoginForm from "./Pages/LoginForm/LoginForm";

// trang login sau khi bấm -> quản lý acc
// menu: quản lý acc + quản lý kênh 
// quản lý acc: thêm sửa xóa dữ liệu (lưu = cass - TablePlus (quản lý cass) và select elasticsearch)
// docker -> set up Kibana để hiển thị elasticsearch
// quản lý kênh: ng dùng enter id kênh -> backend call API của yt để lấy thông tin kênh -> lưu số liệu lại
// detail kênh: theo thiết kế

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => setBackendData(data)
    )
  }, []);

  return (
    <LoginForm />
  );
}

export default App;
