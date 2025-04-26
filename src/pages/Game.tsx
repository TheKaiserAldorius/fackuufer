// Game.tsx
import React, { useState } from 'react';

const Game = ({ caseId, onGameFinish }) => {
    const [loading, setLoading] = useState(false);
    const [prize, setPrize] = useState(null);

    const startGame = async () => {
        setLoading(true);
        // Запрос на сервер для запуска игры
        const response = await fetch(`/api/play-game`, {
            method: 'POST',
            body: JSON.stringify({ caseId }),
            headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.json();
        setPrize(result.prize);
        onGameFinish(result);
        setLoading(false);
    };

    return (
        <div>
            <button onClick={startGame} disabled={loading}>
                {loading ? 'Играем...' : 'Запустить рулетку'}
            </button>
            {prize && <div>Выигрыш: {prize.name}</div>}
        </div>
    );
};

export default Game;
