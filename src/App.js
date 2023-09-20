import { Routes, Route } from "react-router-dom";

import "./App.css";
import React from "react";
import Login from "./components/LoginPage/index";
import HomePage from "./components/HomePage/index";
import About from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={About} />
      </Routes>
    </>
  );
}

export default App;
