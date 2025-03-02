// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Personality Quiz</h1>
      <p className="text-xl mb-8">
        Discover your personality type with our comprehensive questionnaire.
        This test includes questions that will help determine your traits across 
        multiple dimensions.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What You'll Learn:</h2>
        <ul className="text-left max-w-md mx-auto">
          <li className="mb-2">• Your mind traits (Introverted vs. Extroverted)</li>
          <li className="mb-2">• Your energy traits (Intuitive vs. Observant)</li>
          <li className="mb-2">• Your nature traits (Thinking vs. Feeling)</li>
          <li className="mb-2">• Your tactics traits (Judging vs. Prospecting)</li>
        </ul>
      </div>
      <Link 
        to="/quiz" 
        className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Start Quiz
      </Link>
    </div>
  );
};

export default HomePage;