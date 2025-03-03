// src/pages/ResultsPage.jsx
import { Link, Navigate } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';

const ResultsPage = () => {
  const { results, resetQuiz } = useQuizContext();
  
  if (!results) {
    return <Navigate to="/" />;
  }
  
  // Get severity color based on score
  const getSeverityColor = () => {
    const { score } = results;
    if (score <= 7) return 'bg-green-500';
    if (score <= 14) return 'bg-yellow-500';
    if (score <= 21) return 'bg-orange-500';
    return 'bg-red-500';
  };
  
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-center">Your Assessment Results</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="text-center mb-6">
          <div className="flex flex-col items-center justify-center mb-4">
            <span className="text-xl mb-1">Your score:</span>
            <span className="text-5xl font-bold">{results.score}</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-2">{results.interpretation.level}</h2>
          <p className="text-xl text-gray-600">{results.interpretation.description}</p>
        </div>
        
        <div className="mb-8">
          <h3 className="font-semibold mb-2 text-center">Severity Level</h3>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full ${getSeverityColor()}`} 
              style={{ width: `${(results.score / 28) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span>None</span>
            <span>Mild</span>
            <span>Moderate</span>
            <span>Severe</span>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">What does this mean?</h3>
          <p className="text-gray-700">
            This assessment measures the severity of your insomnia symptoms. 
            The higher the score, the more severe your symptoms may be. 
            A score above 14 may indicate clinically significant insomnia.
          </p>
        </div>
      </div>
      
      <div className="text-center">
        <Link 
          to="/"
          onClick={resetQuiz}
          className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Take Assessment Again
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;