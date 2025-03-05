// src/pages/HomePage.jsx
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext'; // Add this import
import { useEffect } from 'react';
import comingSoon from '../assets/guinea.jpg'
import melatonin from '../assets/melatonin.jpg'
import herbs from '../assets/herbs.jpg'

const HomePage = () => {

    // Add this useEffect hook
    useEffect(() => {
      // Check if we need to scroll to solutions
      const shouldScrollToSolutions = sessionStorage.getItem('scrollToSolutions');
      if (shouldScrollToSolutions) {
        // Clear the flag
        sessionStorage.removeItem('scrollToSolutions');
        
        // Find the solutions element
        const solutionsElement = document.getElementById('solutions');
        if (solutionsElement) {
          // Add a bit more delay for a more dramatic effect
          setTimeout(() => {
            // Scroll to position the element better in view
            window.scrollTo({
              top: solutionsElement.offsetTop - 100, // Add offset to position it better
              behavior: 'smooth'
            });
          }, 300); // Longer delay for a more noticeable effect
        } 
      }
    }, []);

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
  className="group w-full !rounded-full mb-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center cursor-pointer"
  onClick={startInsomniaQuiz}
>
  <span className="flex items-center">
    Insomnia Severity Assessment
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 opacity-70 group-hover:opacity-100" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </span>
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
  className="group w-full !rounded-full mb-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center cursor-pointer"
  onClick={startStressQuiz}
>
  <span className="flex items-center">
    Perceived Stress Quiz
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 opacity-70 group-hover:opacity-100"  viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </span>
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
    <h2 className="text-3xl font-medium text-gray-800 mb-2">About Our Assessments</h2>
    <h2 className="text-2xl font-medium text-gray-600 mb-6">평가 소개</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-medium mb-1">Insomnia Severity Index</h3>
        <h4 className="text-lg font-medium text-gray-600 mb-3">불면증 심각도 지수</h4>
        <p className="text-gray-600 mb-2">
          The Insomnia Severity Index (ISI) is a brief screening measure that assesses the severity of both nighttime and daytime components of insomnia. It consists of seven questions that evaluate the severity of sleep onset, sleep maintenance, and early morning awakening problems.
        </p>
        <p className="text-gray-500 text-sm">
          불면증 심각도 지수(ISI)는 불면증의 야간 및 주간 구성 요소의 심각도를 평가하는 간단한 검사입니다. 이 검사는 입면, 수면 유지, 조기 기상 문제의 심각도를 평가하는 7개의 질문으로 구성됩니다.
        </p>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-medium mb-1">Perceived Stress Scale</h3>
        <h4 className="text-lg font-medium text-gray-600 mb-3">인지된 스트레스 척도</h4>
        <p className="text-gray-600 mb-2">
          The Perceived Stress Scale (PSS) is one of the most widely used psychological instruments for measuring the perception of stress. It measures the degree to which situations in one's life are appraised as stressful.
        </p>
        <p className="text-gray-500 text-sm">
          인지된 스트레스 척도(PSS)는 스트레스 인식을 측정하는 데 가장 널리 사용되는 심리 도구 중 하나입니다. 이 척도는 개인의 삶에서 상황이 스트레스로 평가되는 정도를 측정합니다.
        </p>
      </div>
    </div>
  </div>
</div>

{/* Product Recommendations Section */}
<div id="solutions" className="w-full bg-blue-50 shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.1)]">
  <div className="max-w-4xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-medium text-gray-800 mb-2">Recommended Solutions</h2>
    <h3 className="text-2xl font-medium text-gray-600 mb-2">추천 솔루션</h3>
    <p className="text-gray-600 mb-8">Products that may help with your specific needs</p>
    <p className="text-gray-500 mb-8">귀하의 특정 요구에 도움이 될 수 있는 제품</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Insomnia Product */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
        <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
          <img 
            // src="https://placehold.co/300x200/e6effe/1d4ed8?text=Sleep+Aid" 
            src={melatonin}
            alt="Sleep Aid Supplement" 
            className="max-h-full object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-medium mb-1">Natural Sleep Support</h3>
          <h4 className="text-md font-medium text-gray-600 mb-2">자연 수면 보조제</h4>
          <p className="text-gray-600 text-sm mb-2">A gentle blend of melatonin, magnesium, and herbs to support healthy sleep patterns.</p>
          <p className="text-gray-500 text-xs mb-4">건강한 수면 패턴을 지원하기 위한 멜라토닌, 마그네슘 및 허브의 부드러운 조합입니다.</p>
          <a 
            href="#sleep-products" 
            className="inline-block py-2 px-4 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition-colors"
          >
            Learn More <span className="text-xs">자세히 보기</span>
          </a>
        </div>
      </div>
      
      {/* Stress Product */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
        <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
          <img 
            // src="https://placehold.co/300x200/e6effe/1d4ed8?text=Stress+Relief"
            src={herbs} 
            alt="Stress Relief Supplement" 
            className="max-h-full object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-medium mb-1">Calm & Focused Formula</h3>
          <h4 className="text-md font-medium text-gray-600 mb-2">평온 & 집중 포뮬러</h4>
          <p className="text-gray-600 text-sm mb-2">Adaptogenic herbs and B vitamins to support your body's natural stress response.</p>
          <p className="text-gray-500 text-xs mb-4">몸의 자연적인 스트레스 반응을 지원하기 위한 적응원 허브와 B 비타민입니다.</p>
          <a 
            href="#stress-products" 
            className="inline-block py-2 px-4 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition-colors"
          >
            Learn More <span className="text-xs">자세히 보기</span>
          </a>
        </div>
      </div>
      
      {/* Future Product Placeholder */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
        <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
          {/* <span className="text-indigo-500 font-medium">Coming Soons</span> */}
          <img src={comingSoon} className="max-h-full object-cover"></img>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-medium mb-1">More Solutions</h3>
          <h4 className="text-md font-medium text-gray-600 mb-2">추가 솔루션</h4>
          <p className="text-gray-600 text-sm mb-2">We recommend these two piggies that can not only relief your stress, but also cure severe insomnia.</p>
          <p className="text-gray-500 text-xs mb-4">우리는 이 두 마리의 기니피그를 추천합니다. 이들은 스트레스를 해소할 뿐만 아니라 심각한 불면증도 치료할 수 있습니다.</p>
          <a 
            href="#upcoming" 
            className="inline-block py-2 px-4 bg-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-gray-300 transition-colors"
          >
            Get Updates <span className="text-xs">업데이트 받기</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default HomePage;

