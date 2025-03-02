import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <Link to="/quiz/insomnia" className="bg-blue-500 text-white p-4 m-2 rounded">Take the Insomnia Severity Index</Link>
    <Link to="/quiz/stress" className="bg-green-500 text-white p-4 m-2 rounded">Take the Perceived Stress Scale</Link>
  </div>
);

export default Home;