import { useEffect } from "react";
import { useState } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isStart) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    if (intervalId) return () => clearInterval(intervalId);
  }, [isStart]);

  const handleStart = () => {
    if (isStart === false) {
      setTimer(0);
      setIsStart(true);
    }
  };
  const handleStop = () => {
    setIsStart(false);
  };
  const handlePauseResume = () => {
    setIsStart(!isStart);
  };

  const formatTime = (time) => {
    //time = time * 1000;
    return (
      <p>
        {Math.floor(time / 3600)}hr:{Math.floor(time / 60)}min:
        {Math.floor(time % 60)}sec
      </p>
    );
  };
  return (
    <>
      <p>{formatTime(timer)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePauseResume}>Pause/Resume</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};
export default Stopwatch;
