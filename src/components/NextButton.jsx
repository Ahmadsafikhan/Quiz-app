import React from 'react';

const NextButton = ({ answer, dispatch, questionIndex, numQuestions }) => {
  if (answer === null) return null;

  if (questionIndex === numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "finish" })}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
      >
        See Results
      </button>
    );
  }

  if (questionIndex < numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
      >
        Next
      </button>
    );
  }

  return null;
};

export default NextButton;
