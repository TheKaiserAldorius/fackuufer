// Rating.tsx
import React, { useState, useEffect } from 'react';

const Rating = () => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        fetch("/api/leaders")
            .then(res => res.json())
            .then(data => setLeaders(data));
    }, []);

    return (
        <div>
            <h1>Таблица лидеров</h1>
            <ul>
                {leaders.map((leader, index) => (
                    <li key={index}>
                        {index + 1}. {leader.username} - {leader.stars} XTR
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Rating;
