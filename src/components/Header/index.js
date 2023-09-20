import React from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import "./index.css";

import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const auth = localStorage.getItem("auth");
  const navigate = useNavigate();
  const onClickLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  const onClickLoginButton = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <h1 className="heading">
        <RiArrowLeftRightLine color="white" className="arrow-icon" />
        Return Journey
      </h1>
      <div>
        <Link to="/About" className="link-item">
          <button className="header-button"> About </button>
        </Link>
        {auth && (
          <button className="header-button" onClick={onClickLogout}>
            Logout
          </button>
        )}
        {!auth && (
          <button className="header-button" onClick={onClickLoginButton}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
