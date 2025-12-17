import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import { QuizLoader } from './components/QuizLoader';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/quiz">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:name" element={<QuizLoader />} />
        {/* Fallback to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
