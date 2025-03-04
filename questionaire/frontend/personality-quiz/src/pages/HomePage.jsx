// src/pages/HomePage.jsx
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext'; // Add this import

const HomePage = () => {

  const navigate = useNavigate();
  const { startQuiz } = useQuizContext(); // Change useQuiz to useQuizContext

  const startInsomniaQuiz = () => {
    startQuiz('insomnia');
    navigate('/quiz');
  };
  const startStressQuiz = () => {
    startQuiz('stress');
    navigate('/quiz');
  };
  return (
    <>
<div className='flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4' style={{ paddingTop: '200px' }}>
      {/* Text container with centered content */}
      <div className="text-center mb-4">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">Health Assessment</h1>
        <h1 className="text-5xl font-medium text-gray-800 mt-6 sm:mt-10">건강 평가</h1>
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

        {/* ADD THIS NEW SECTION HERE - after the closing div of your existing content */}
        <div className="w-full bg-white shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.1)] mt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-medium text-gray-800 mb-6">About Our Assessments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Insomnia Severity Index</h3>
            <p className="text-gray-600">
              The Insomnia Severity Index (ISI) is a brief screening measure that assesses the severity of both nighttime and daytime components of insomnia. It consists of seven questions that evaluate the severity of sleep onset, sleep maintenance, and early morning awakening problems.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Perceived Stress Scale</h3>
            <p className="text-gray-600">
              The Perceived Stress Scale (PSS) is one of the most widely used psychological instruments for measuring the perception of stress. It measures the degree to which situations in one's life are appraised as stressful.
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default HomePage;

