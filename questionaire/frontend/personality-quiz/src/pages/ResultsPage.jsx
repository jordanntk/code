// src/pages/ResultsPage.jsx
import { Link, Navigate } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';

const ResultsPage = () => {
  const { results, resetQuiz } = useQuizContext();
  
  if (!results) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Your Personality Type</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">{results.type}</h2>
          <p className="text-xl text-gray-600">{results.description}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          {Object.entries(results.traits).map(([trait, value]) => (
            <div key={trait} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{trait}</h3>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600" 
                  style={{ width: `${value}%` }}
                />
              </div>
              <div className="flex justify-between mt-1 text-sm">
                <span>{value < 50 ? trait.split('/')[0] : ''}</span>
                <span>{value > 50 ? trait.split('/')[1] : ''}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <Link 
          to="/"
          onClick={resetQuiz}
          className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Take Quiz Again
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;