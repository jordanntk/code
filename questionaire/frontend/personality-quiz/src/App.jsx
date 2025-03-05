// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import StorePage from './pages/StorePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import { QuizProvider } from './context/QuizContext';
import Header from './components/Header';
import Footer from './components/Footer';
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
              <Route path="/store" element={<StorePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
            </Routes>
        </div>
        <Footer />

        </div>
      </QuizProvider>
      <Header /> 
    </BrowserRouter>
  );
}

export default App;

