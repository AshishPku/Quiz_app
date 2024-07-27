import React, { useEffect } from "react";

const Timer = ({ dispatch, remainingSeconds }) => {
  const min = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "timer" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div>
      {min < 10 ? "0" : ""}
      {min}:{seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  );
};

export default Timer;
