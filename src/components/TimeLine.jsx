import React from 'react';

const TimeLine = ({ numQuestions, questionIndex, answer }) => {
  return (
    <header className=''>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-xl font-semibold bg-green-300 p-[10px] rounded-lg">
            Question: <strong>{questionIndex + 1}</strong>/{numQuestions}
          </p>
        </div>
        {/* You can add more information or components here */}
      </div>
    </header>
  );
}

export default TimeLine;
