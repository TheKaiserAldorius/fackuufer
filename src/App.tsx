import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Rating from "./pages/Rating";
import Header from "./components/Header";
import BottomNavigation from "./components/BottomNavigation";
import TelegramWebApp from "telegram-mini-app"; // Импортируем SDK для получения данных о пользователе

const App = () => {
  const [user, setUser] = useState<any>(null); // Состояние для хранения данных пользователя

  useEffect(() => {
    // Инициализация WebApp SDK
    TelegramWebApp.init();

    // Получаем данные о пользователе из Telegram
    const userData = TelegramWebApp.initDataUnsafe;
    if (userData) {
      console.log("Telegram User:", userData);

      // Отправляем данные на сервер для регистрации или авторизации
      registerOrLogin(userData);
    }
  }, []);

  // Функция для регистрации или авторизации пользователя
  const registerOrLogin = (userData: any) => {
    // Отправляем данные на сервер
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        telegramId: userData.id,
        username: userData.username,
        firstName: userData.first_name,
        lastName: userData.last_name,
        profilePhoto: userData.photo_url,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User registered or logged in:", data);
        setUser(data.user); // Сохраняем данные пользователя в состоянии
      })
      .catch((error) => {
        console.error("Error with registration or login:", error);
      });
  };

  return (
    <div className="app">
      <Header /> {/* Шапка всегда сверху */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/history" element={<History />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
      </div>
      <BottomNavigation /> {/* И футер всегда снизу */}
    </div>
  );
};

export default App;
