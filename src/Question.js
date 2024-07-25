import React from "react";

const Question = ({ question, dispatch, answer }) => {
  return (
    <div>
      <p>{question.question}</p>
      <div>
        {question.options?.map((option) => (
          <button key={option}>{option}</button>
        ))}
      </div>
    </div>
  );
};

export default Question;
