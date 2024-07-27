import React from "react";

const Nextbutton = ({ dispatch, answer, index, n }) => {
  if (answer == null) return null;
  if (index < n - 1) {
    return (
      <div className="btn-container">
        <button
          className="btn-next"
          onClick={() => dispatch({ type: "NextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  } else {
    return (
      <div className="btn-container">
        <button
          className="btn-next"
          onClick={() => dispatch({ type: "finish" })}
        >
          Submit
        </button>
      </div>
    );
  }
};

export default Nextbutton;
