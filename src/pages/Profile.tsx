// Profile.tsx
import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        fetch("/api/user-profile")
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    const claimPrize = async (itemId) => {
        await fetch(`/api/claim-prize/${itemId}`, { method: 'POST' });
        alert("Приз забран!");
    };

    return (
        <div>
            <h1>Ваш профиль</h1>
            {user && (
                <div>
                    <p>Баланс: {user.balance} XTR</p>
                    <h2>Выигранные призы:</h2>
                    <ul>
                        {user.items.map(item => (
                            <li key={item.id}>
                                {item.name}
                                <button onClick={() => claimPrize(item.id)}>Забрать</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Profile;
