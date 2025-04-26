// History.tsx
import React, { useState, useEffect } from 'react';

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch("/api/history")
            .then(res => res.json())
            .then(data => setHistory(data));
    }, []);

    return (
        <div>
            <h1>История игр и транзакций</h1>
            <ul>
                {history.map((entry, index) => (
                    <li key={index}>
                        {entry.date}: {entry.type} {entry.amount} XTR
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;
