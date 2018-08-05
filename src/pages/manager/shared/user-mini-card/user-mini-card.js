import React from 'react';
import { shape, string } from 'prop-types';

import './user-mini-card.css';

function UserMiniCard({ user }) {
    return (
        <div className="user-mini-card">
            <div className="avatar">
                <img src={user.avatarUrl} height="71" alt="Paquitosoft" />
            </div>
            <div className="username">{user.nickname}</div>
        </div>
    );
}

UserMiniCard.propTypes = {
    user: shape({
        userId: string,
        nickname: string,
        avatarUrl: string
    })
};

export default UserMiniCard;
