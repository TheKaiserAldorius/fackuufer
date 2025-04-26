
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Trophy, User, ScrollText } from "lucide-react";
import "./BottomNavigation.scss";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главное", icon: <Home size={24} /> },
    { path: "/rating", label: "Рейтинг", icon: <Trophy size={24} /> },
    { path: "/profile", label: "Профиль", icon: <User size={24} /> },
    { path: "/history", label: "История", icon: <ScrollText size={24} /> },
  ];

  return (
    <div className="bottom-navigation">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={location.pathname === item.path ? "active" : ""}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNavigation;
