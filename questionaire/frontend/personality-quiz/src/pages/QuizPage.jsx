// src/pages/QuizPage.jsx
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import Question from '../components/quiz/Question';
import ProgressBar from '../components/common/ProgressBar';

const QuizPage = () => {
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
  console.log(`Progress: ${progress}%, Question: ${currentQuestion + 1}/${questions.length}`);

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      completeQuiz();
      navigate('/results');
    } else {
      nextQuestion();
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <ProgressBar progress={progress} />
      
      <div className="my-8">
        <Question 
          question={question} 
          selectedAnswer={answers[question.id]} 
          onAnswer={(answer) => handleAnswer(question.id, answer)} 
        />
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="px-6 py-2 rounded bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
        
        <button
          onClick={handleNext}
          disabled={!answers[question.id]}
          className="px-6 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
        >
          {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;