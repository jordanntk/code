// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import { QuizProvider } from './context/QuizContext';
import Header from './components/Header';
import { useAutoAnimate } from '@formkit/auto-animate/react'

function App() {
  const [animationParent] = useAutoAnimate()

  return (
    <BrowserRouter>
      <QuizProvider>
      <div className='bg-gradient-to-br from-blue-200 via-white to-indigo-100 min-h-screen'>
        <div ref={animationParent} className="flex flex-col min-h-screen items-center justify-center flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/results" element={<ResultsPage />} />
            </Routes>
        </div>
        </div>
      </QuizProvider>
      <Header /> 
    </BrowserRouter>
  );
}

export default App;

