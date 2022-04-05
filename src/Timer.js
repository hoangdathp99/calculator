import React from "react";
import "./css/Timer.css";
export default function Timer(props) {
    return (
        <div className="timer">
            <span className="minutes">
                {("0" + Math.floor((props.time/60000)%60)).slice(-2)}:
            </span>
            <span className="seconds">
                {("0" + Math.floor((props.time/1000)%60)).slice(-2)}:
            </span>
            <span className="mili-seconds">
                {("0"+Math.floor((props.time/10)%60)).slice(-2)}
            </span>
        </div>
    );
}