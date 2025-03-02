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
      <button className='m-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={startInsomniaQuiz}>Insomnia Severity Quiz</button>
      <button className='m-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={startStressQuiz}>Perceived Stress Quiz</button>
    </div>
  );
};

export default HomePage;