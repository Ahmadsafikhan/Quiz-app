import React from 'react';

const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  return (
    <div>
      {question.options.map((option, index) => (
        <div className='flex flex-col' key={option}>
          <button
            className={`py-2 px-4 rounded-lg my-[10px] ${
              hasAnswered ? (index === answer ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700 cursor-not-allowed") : "bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-black"
            }`}
            onClick={() => !hasAnswered && dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswered}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Options;
