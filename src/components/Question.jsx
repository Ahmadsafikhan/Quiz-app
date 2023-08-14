import React from 'react';
import Options from './Options';

const Question = ({ question, dispatch, answer }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-4">{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
