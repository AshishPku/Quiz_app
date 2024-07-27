import React from "react";

const Question = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div>
      <p className="question">Q) {question.question}</p>
      <div className="btn-box">
        {question.options?.map((option, index) => (
          <button
            className={`btn ${
              index === answer
                ? `${question.correctOption === index ? "" : "btn-wrong"}`
                : ""
            }${
              hasAnswered
                ? index === question.correctOption
                  ? "btn-correct"
                  : ""
                : ""
            }`}
            disabled={hasAnswered}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
