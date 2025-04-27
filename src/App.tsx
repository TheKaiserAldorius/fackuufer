import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import History from './pages/History';
import Rating from './pages/Rating';
import CasesPage from './pages/CasesPage';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import OnlineCasesBlock from './components/OnlineCasesBlock';

const App = () => {
  return (
    <div className="app">
      <Header />
      <OnlineCasesBlock />

      <div className="main-content">
        <Routes>
          {/* Главная теперь — страница с кейсами */}
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
