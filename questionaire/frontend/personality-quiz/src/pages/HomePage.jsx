// src/pages/HomePage.jsx
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

  const navigate = useNavigate();

  const startInsomniaQuiz = () => {
    navigate('/quiz');
  }
  const startStressQuiz = () => {
    navigate('/quiz');
  }
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 pt-10'>
      {/* Text container with centered content */}
      <div className="text-center mb-4">
        <h1 className="text-6xl font-medium bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text whitespace-nowrap">Health Assessment</h1>
        <h1 className="text-5xl font-medium text-gray-800 mt-10">건강 평가</h1>
      </div>
      
      {/* Button container */}
      <div className="w-full max-w-md mt-6">
        <button 
          className="w-full mb-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center cursor-pointer"
          onClick={startInsomniaQuiz}
        >
          <span>Insomnia Severity Assessment</span>
          <span className="text-sm mt-1">불면증 심각도 평가</span>
        </button>
        
          {/* Source link for insomnia assessment */}
        <a 
          href="https://www.med.upenn.edu/cbti/assets/user-content/documents/Insomnia%20Severity%20Index%20(ISI).pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-center text-xs text-gray-500 hover:text-blue-600 mb-10"
        >
          <span>Based on this test</span>
          <span className="mx-1">•</span>
          <span>이 테스트 기반</span>
        </a>

        <button 
          className="w-full mb-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center cursor-pointer"
          onClick={startStressQuiz}
        >
          <span>Perceived Stress Quiz</span>
          <span className="text-sm mt-1">인지된 스트레스 검사</span>
        </button>

                  {/* Source link for insomnia assessment */}
                  <a 
          href="https://www.mindgarden.com/documents/PerceivedStressScale.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-center text-xs text-gray-500 hover:text-blue-600 mb-10"
        >
          <span>Based on this test</span>
          <span className="mx-1">•</span>
          <span>이 테스트 기반</span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;

