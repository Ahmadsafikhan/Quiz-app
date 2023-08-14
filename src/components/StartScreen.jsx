import React from 'react';

const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-semibold mb-4">Welcome to Quiz!</h2>
      <h3 className="text-lg text-gray-600 mb-6">{numQuestions} questions to test your Pakistan History Knowledge</h3>
      <button
        onClick={() => dispatch({ type: 'start' })}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
      >
        Let's start!
      </button>
    </div>
  );
};

export default StartScreen;
