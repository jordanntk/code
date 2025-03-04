import React, { createContext, useContext, useState } from 'react';
import questions, { interpretScore } from '../data/questions';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const completeQuiz = () => {
    // Calculate the total score by summing all answer values
    const totalScore = Object.keys(answers).reduce((sum, questionId) => {
      return sum + answers[questionId].value;
    }, 0);

    // Get interpretation based on score
    const interpretation = interpretScore(totalScore);

    setResults({
      score: totalScore,
      interpretation: interpretation
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResults(null);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestion,
        answers,
        results,
        handleAnswer,
        nextQuestion,
        prevQuestion,
        completeQuiz,
        resetQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);