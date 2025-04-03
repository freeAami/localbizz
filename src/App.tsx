import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import BusinessPage from './pages/BusinessPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App; 