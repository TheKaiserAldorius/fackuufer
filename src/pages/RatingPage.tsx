import React, { useState } from 'react';
import './RatingPage.scss';

const leaders = [
  { name: 'Omar Saris', stars: 97765, position: 1 },
  { name: 'Ryan Carder', stars: 67532, position: 2 },
  { name: 'Martin Levin', stars: 45421, position: 3 },
  // ...можешь добавить ещё для списка
];

const RatingPage = () => {
  const [tab, setTab] = useState('general');

  return (
    <div className="rating-page">
      {/* Вкладки */}
      <div className="rating-tabs">
        <button
          className={tab === 'general' ? 'active' : ''}
          onClick={() => setTab('general')}
        >
          General
        </button>
        <button
          className={tab === 'weekly' ? 'active' : ''}
          onClick={() => setTab('weekly')}
        >
          Weekly
        </button>
      </div>

      {/* Верхний блок лидеров */}
      <div className="top-section">
        <div className="first-second">
          <div className="second big-slot">
            <div className="position">2nd</div>
            {/* Здесь будет изображение победителя */}
          </div>
          <div className="first big-slot">
            <div className="position">1st</div>
          </div>
        </div>
        <div className="others">
          <div className="third small-slot">
            <div className="position">3rd</div>
          </div>
          <div className="small-slot">
            <div className="position">4-10</div>
          </div>
          <div className="small-slot">
            <div className="position">11-20</div>
          </div>
        </div>
      </div>

      {/* Твой профиль в рейтинге */}
      <div className="current-user">
        <div className="avatar-placeholder" />
        <div className="current-info">
          <div className="name">Aldoriusis K.</div>
          <div className="rank">Вы на #542 месте</div>
        </div>
      </div>

      {/* Список лидеров */}
      <div className="leaders-list">
        {leaders.map((u) => (
          <div key={u.position} className="leader-row">
            <div className="rank-badge">#{u.position}</div>
            <div className="leader-avatar" />
            <div className="leader-info">
              <div className="name">{u.name}</div>
              <div className="stars">{u.stars.toLocaleString()} звёзд заработано</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingPage;
