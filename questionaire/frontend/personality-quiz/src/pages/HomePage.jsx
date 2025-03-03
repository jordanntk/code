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
    <div className='justify-center items-center flex-col flex'>
      <h1 className="text-6xl font-medium text-black p-6">Health Assessment</h1>
      <h1 className="text-6xl font-medium text-black p-6">건강 평가</h1>
      <button className="m-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center"onClick={startInsomniaQuiz}>
      <span>Insomnia Severity Assessment</span>
      <span className="text-sm mt-1">불면증 심각도 평가</span>
      </button>
      <button className="m-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center" onClick={startStressQuiz}>
        <span>Perceived Stress Quiz</span>
        <span className="text-sm mt-1">인지된 스트레스 검사</span>
        </button>
    </div>
  );
};

export default HomePage;

