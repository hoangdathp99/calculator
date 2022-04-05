import logo from "./logo.svg";
import "./css/App.css";
import { useEffect, useState } from "react";
import React from "react";
import StopWatch from "./StopWatch";
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "1px solid",
          // paddingBottom: "1rem",
        }}
      >
        <Link to="stopwatch">StopWatch</Link> |{" "}
        <Link to="calculator">Calculator</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
