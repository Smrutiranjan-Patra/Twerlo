import React, { useState } from "react";
import "./css/login.css";
import axios from "axios";

const Userlogin = () => {
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
      .post("http://localhost:2022/user/login", userlogindetails)
      .then((res) => {
        alert(res.data.message);
        setUserlogindetails({
          email: "",
          password: "",
        });
      });
  };
  return (
    <div className="userloginpage">
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
      <button onClick={UserAuth}>Submit</button>
    </div>
  );
};

export default Userlogin;
