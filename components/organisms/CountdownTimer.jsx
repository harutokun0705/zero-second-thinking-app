import { useState, useEffect } from "react"
import React from "react";
export const CountDownTimer = React.memo((props) => {
  const hours = 0;
  const minutes = 1;
  const seconds = 0;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0)
      props.setInputDisabled(true)
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  }


  // const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });
  return (
    <div>
      <p className="text-9xl text-green-600">{`${hrs.toString().padStart(2, '0')}:${mins
        .toString()
        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
    </div>
  );
})