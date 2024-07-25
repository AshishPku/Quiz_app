import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const FirstScreen = ({ totalquestions, dispatch }) => {
  return (
    <div>
      <p>You have {totalquestions} to solved.</p>
      <button onClick={() => dispatch({ type: "start" })}>Let's Start</button>
    </div>
  );
};

export default FirstScreen;
