import React, { useState } from "react";
import axios from "axios";
import "./css/login.css";

const Adminlogin = () => {
  const [userlogindetails, setUserlogindetails] = useState({
    email: "",
    password: "",
  });
  const handledata = (e) => {
    const { name, value } = e.target;
    setUserlogindetails({
      ...userlogindetails,
      [name]: value,
    });
  };
  const UserAuth = () => {
    const { email, password } = userlogindetails;
    axios
      .post("http://localhost:2022/admin/login", userlogindetails)
      .then((res) => {
        alert(res.data.message);
      });
  };
  return (
    <div className="userloginpage">
      <p>Welcome to Admin login</p>
      <input
        type="email"
        name="email"
        value={userlogindetails.email}
        placeholder="Your Email"
        onChange={handledata}
      />
      <input
        type="password"
        name="password"
        value={userlogindetails.password}
        placeholder="Your Password"
        onChange={handledata}
      />
      <button onClick={UserAuth}>Admin login</button>
    </div>
  );
};

export default Adminlogin;
