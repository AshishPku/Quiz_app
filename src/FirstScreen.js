import React from "react";

const FirstScreen = ({ totalquestions, dispatch }) => {
  return (
    <div>
      <p className="desc-p">You have {totalquestions} questions to solved.</p>
      <ul className="description">
        <p>Read the description carefully:-</p>
        <li>Questions are single correct type.</li>
        <li>
          Once you clicked some option you won't be able to change your answer.
        </li>
        <li>
          If you select some option and if it is correct then it will be in
          green color otherwise it will be in red color.
        </li>
        <li>
          Once you start your quiz you will not be able to come back and you
          have to submit the quiz.
        </li>
        <li>
          Next question button only be visible when you select any option.
        </li>
        <li>
          Once you click on the next button you won't be able to go to the
          previous question.
        </li>
      </ul>
      <div className="btn-container">
        <button
          className="btn btn-start"
          onClick={() => dispatch({ type: "start" })}
        >
          Let's Start
        </button>
      </div>
    </div>
  );
};

export default FirstScreen;
