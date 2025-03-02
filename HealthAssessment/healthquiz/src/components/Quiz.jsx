import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Question from './Question';

const questionsData = {
  insomnia: [
    { question: "How often do you have trouble falling asleep?", options: [0, 1, 2, 3, 4] },
    { question: "How often do you wake up during the night?", options: [0, 1, 2, 3, 4] },
  ],
  stress: [
    { question: "How often do you feel stressed?", options: [0, 1, 2, 3, 4] },
    { question: "How often do you feel overwhelmed?", options: [0, 1, 2, 3, 4] },
  ],
};

const Quiz = () => {
  const location = useLocation();
  const history = useHistory();
  const [answers, setAnswers] = useState({});
  const quizType = location.pathname.split('/')[2];
  const questions = questionsData[quizType];

  const handleAnswer = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleSubmit = () => {
    const total = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
    history.push(`/result/${quizType}/${total}`);
  };

  return (
    <div className="p-4">
      {questions.map((q, index) => (
        <Question key={index} index={index} question={q} handleAnswer={handleAnswer} />
      ))}
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded mt-4">Submit</button>
    </div>
  );
};

export default Quiz;