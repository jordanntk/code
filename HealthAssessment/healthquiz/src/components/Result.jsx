import React from 'react';
import { useParams } from 'react-router-dom';

const Result = () => {
  const { quizType, total } = useParams();
  const resultText = quizType === 'insomnia' ? `Your insomnia severity score is ${total}` : `Your stress level is ${total}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">{resultText}</h1>
      <p>Thank you for taking the quiz!</p>
    </div>
  );
};

export default Result;