// src/pages/ResultsPage.jsx
import { Link, Navigate } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import { quizMetadata } from '../data/questions';

const ResultsPage = () => {
  const { results, resetQuiz, quizType } = useQuizContext(); // Changed useQuiz to useQuizContext, added results and resetQuiz

  if (!results) {
    return <Navigate to="/" />;
  }
  
  // // Get severity color based on score
  // const getSeverityColor = () => {
  //   const { score } = results;
  //   if (score <= 7) return 'bg-green-500';
  //   if (score <= 14) return 'bg-yellow-500';
  //   if (score <= 21) return 'bg-orange-500';
  //   return 'bg-red-500';
  // };

  // Get quiz-specific metadata
  const metadata = quizMetadata[quizType];

  // Get severity color based on score
  const getSeverityColor = () => {
    const { score } = results;
    for (const range of metadata.severityRanges) {
      if (score <= range.max) return range.color;
    }
    return metadata.severityRanges[metadata.severityRanges.length - 1].color;
  };
  
  return (
    <div>
      <h1 className="text-4xl font-bold mb-3 mt-30 text-center">Your Assessment Results</h1>
      <h2 className="text-3xl font-medium mb-6 text-center">귀하의 평가 결과</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="text-center mb-6">
  <div className="flex flex-col items-center justify-center mb-4">
    <span className="text-xl">Your score:</span>
    <span className="text-lg mb-1">귀하의 점수:</span>
    <span className="text-5xl font-bold">{results.score}</span>
  </div>
  
  <h2 className="text-3xl font-bold mb-1">{results.interpretation.level}</h2>
  <h3 className="text-2xl font-medium mb-4">{results.interpretation.levelKr}</h3>
  
  <p className="text-xl text-gray-600 mb-1">{results.interpretation.description}</p>
  <p className="text-lg text-gray-500">{results.interpretation.descriptionKr}</p>
</div>
        
<div className="mb-8">
          <h3 className="font-semibold mb-2 text-center">Severity Level</h3>
          <h3 className="font-semibold mb-2 text-center">심각도 수준</h3>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full ${getSeverityColor()}`} 
              style={{ width: `${(results.score / metadata.maxScore) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm">
  {metadata.severityLabels.map((label, index) => (
    <span key={index} className="text-center">
      <span className="block">{label.english}</span>
      <span className="block text-xs text-gray-500">{label.korean}</span>
    </span>
  ))}
</div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">What does this mean?</h3>
          <p className="text-gray-700">
            {metadata.explanation.english}
          </p>
          <h3 className="font-semibold mb-2 mt-4">이것은 무엇을 의미합니까?</h3>
          <p className="text-gray-700">
            {metadata.explanation.korean}
          </p>
        </div>
        
      </div>
      
      <div className="text-center">
  <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
    <Link 
      to="/"
      onClick={(e) => {
        // Store in sessionStorage that we want to scroll to solutions after navigation
        sessionStorage.setItem('scrollToSolutions', 'true');
      }}
      className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
    >
      <span>Get Solutions</span>
      <span className="text-sm mt-1">솔루션 보기</span>
    </Link>
    
    <Link 
      to="/"
      onClick={resetQuiz}
      className="flex flex-col items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
    >
      <span>Take Assessment Again</span>
      <span className="text-sm mt-1">다시 평가하기</span>
    </Link>
  </div>
</div>
    </div>
  );
};

export default ResultsPage;