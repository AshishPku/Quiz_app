import React from "react";

const LastScreen = ({ points, highestScore, dispatch }) => {
  return (
    <div>
      <p className="result">
        You Scored <strong>{points}</strong> out of {highestScore} (
        <strong>{((points / highestScore) * 100).toFixed(2)}</strong>%)
      </p>
      <p className="result">Thank You</p>
      <button
        className="btn-next"
        onClick={() => dispatch({ type: "restart" })}
      >
        Re-start
      </button>
    </div>
  );
};

export default LastScreen;
