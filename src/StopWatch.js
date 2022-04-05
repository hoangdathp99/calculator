import { useState, useEffect } from "react";
import Timer from "./Timer";
import Control from "./ControlButton";
import "./css/StopWatch.css";
export default function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let Interval = null;

    if (isActive && isPaused === false) {
      Interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(Interval);
    }
    return () => {
      clearInterval(Interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <div className="stop-watch">
      <Timer time={time}></Timer>
      <Control
        isActive={isActive}
        isPaused={isPaused}
        handlePause={handlePause}
        handleStart={handleStart}
        handleReset={handleReset}
      />
    </div>
  );
}
