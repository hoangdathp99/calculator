import React from "react";
import "./css/Control.scss";
export default function Control(props) {
  const StartBtn = (
    <div className="btn btn-one btn-start" onClick={props.handleStart}>
      Start
    </div>
  );
  const ActiveBtn = (
    <div className="btn-grp">
      <div className="btn btn-two" onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn btn-one" onClick={props.handlePause}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  return (
    <div className="Control-Buttons">
      <div>{props.isActive ? ActiveBtn : StartBtn}</div>
    </div>
  );
}
