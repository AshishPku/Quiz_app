import React from "react";
import Timer from "./Timer";
const Progress = ({ index, n, dispatch, remainingSeconds }) => {
  return (
    <div className="progress">
      <p>
        Questions:<strong>{index + 1}</strong>/{n}
      </p>
      <p>
        <Timer dispatch={dispatch} remainingSeconds={remainingSeconds} />
      </p>
      <p>
        {index !== n - 1 && (
          <button
            className="btn-next"
            onClick={() => dispatch({ type: "finish" })}
          >
            Submit
          </button>
        )}
      </p>
    </div>
  );
};

export default Progress;
