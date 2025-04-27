import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import OnlineCasesBlock from './components/OnlineCasesBlock';

import CasesPage from './pages/CasesPage';
import Profile from './pages/ProfilePage';
import History from './pages/HistoryPage';
import Rating from './pages/RatingPage';

const App = () => {
  const location = useLocation();
  
  // Показывать OnlineCasesBlock только на корневом маршруте "/"
  const showOnlineCases = location.pathname === '/';

  return (
    <div className="app">
      <Header />
      
      {showOnlineCases && <OnlineCasesBlock />}
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<CasesPage />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default App;
