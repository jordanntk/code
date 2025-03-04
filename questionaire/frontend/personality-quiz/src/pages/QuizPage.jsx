import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import Question from '../components/quiz/Question';
import ProgressBar from '../components/common/ProgressBar';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const QuizPage = () => {
  const [animationParent] = useAutoAnimate();
  
  const navigate = useNavigate();
  const { 
    questions, 
    currentQuestion, 
    answers, 
    handleAnswer, 
    nextQuestion, 
    prevQuestion,
    completeQuiz 
  } = useQuizContext();
  
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleQuit = () => {
    navigate('/');
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      completeQuiz();
      navigate('/results');
    } else {
      nextQuestion();
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 mt-16 sm:mt-20 md:mt-10">
      <ProgressBar progress={progress} />
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="my-8 min-h-[300px]">
          <div ref={animationParent} className="relative w-full">
            <div key={currentQuestion} className="w-full">
              <Question
                question={question}
                selectedAnswer={answers[question.id]}
                onAnswer={(answer) => handleAnswer(question.id, answer)}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="px-6 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm hover:shadow transition-all duration-200 disabled:opacity-50 disabled:hover:bg-white disabled:hover:shadow-none cursor-pointer"
        >
          Previous
        </button>
        
        <button
          onClick={handleNext}
          disabled={!(question.id in answers)}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-md cursor-pointer"
        >
          {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
        </button>
      </div>
      <div className='flex justify-center p-9'>
        <button onClick={handleQuit} className="text-gray-500 hover:text-gray-700 font-medium transition-colors duration-200 hover:underline cursor-pointer">Quit Assessment</button>
      </div>
    </div>
  );
};

export default QuizPage;