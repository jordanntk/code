import React, { createContext, useContext, useState } from 'react';
import { insomniaQuestions, stressQuestions, interpretInsomniaScore, interpretStressScore } from '../data/questions';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizType, setQuizType] = useState('insomnia');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  // Get questions based on quiz type
  const getQuestions = () => {
    return quizType === 'insomnia' ? insomniaQuestions : stressQuestions;
  };
  
  // Get interpretation function based on quiz type
  const getInterpretation = (score) => {
    return quizType === 'insomnia' 
      ? interpretInsomniaScore(score) 
      : interpretStressScore(score);
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    const questions = getQuestions(); // Get the correct questions array based on quiz type
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
    const interpretation = getInterpretation(totalScore); // Use getInterpretation instead of interpretScore
    
    setResults({
      score: totalScore,
      interpretation: interpretation
    });
  };

    // Start a specific quiz
    const startQuiz = (type) => {
      setQuizType(type);
      setCurrentQuestion(0);
      setAnswers({});
      // Reset any other quiz state
    };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResults(null);
  };

  return (
    <QuizContext.Provider
    value={{
        questions: getQuestions(),
        currentQuestion,
        question: getQuestions()[currentQuestion],
        answers,
        results,
        handleAnswer,
        nextQuestion,
        prevQuestion,
        completeQuiz,
        resetQuiz,
        startQuiz,
        quizType
      }}
    >
      {children}
    </QuizContext.Provider>
  );

  
};

export const useQuizContext = () => useContext(QuizContext);