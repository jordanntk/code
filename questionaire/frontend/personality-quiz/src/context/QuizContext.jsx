// src/context/QuizContext.jsx
import { createContext, useState, useContext } from 'react';
import questions from '../data/questions';
import calculateResults from '../utils/calculateResults';

const QuizContext = createContext();

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState(null);

  const handleAnswer = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
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
    const quizResults = calculateResults(answers);
    setResults(quizResults);
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
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
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};