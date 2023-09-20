import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Login = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => {
    localStorage.setItem("auth", "loginSuccess");
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <form className="form-container" onSubmit={onClickLogin}>
          <label className="login-label" htmlFor="email">
            Enter Your EmailId
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            id="EmailInput"
            value={email}
            onChange={onChangeEmail}
          />
          <label className="login-label" htmlFor="password">
            Enter your Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={onChangePassword}
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
