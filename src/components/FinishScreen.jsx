import React from 'react';

const FinishScreen = ({ points, maxPoints, highscore, dispatch }) => {
  const percentage = (points / maxPoints) * 100;
  return (
    <div className="text-center p-8">
      <p className="text-4xl mb-4">
       
        <strong>{points}</strong> out of {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="text-lg mb-6">Your Highscore: {highscore} points</p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
