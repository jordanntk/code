import React from 'react';

const Question = ({ index, question, handleAnswer }) => (
  <div className="mb-4">
    <p>{question.question}</p>
    <div className="flex justify-between">
      {question.options.map((option, i) => (
        <label key={i} className="flex items-center">
          <input
            type="radio"
            name={`question-${index}`}
            value={option}
            onChange={() => handleAnswer(index, option)}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);

export default Question;