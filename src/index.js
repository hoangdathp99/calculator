import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Calculator from "./component/Calculator";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StopWatch from "./StopWatch";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="stopwatch" element={<StopWatch />}></Route>
          <Route path="calculator" element={<Calculator />}></Route>
        </Route>
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
