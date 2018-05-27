import React from 'react';

import './game-home-view.css';

import AppTitle from '../shared/app-title/app-title';

import { Card, /*CardContent, CardMedia, Typography*/ } from '@material-ui/core';

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            avatarUrl: 'http://via.placeholder.com/71X71'
        };
    }

    render() {
        /*
            <div class="j17 j21 j18 j211 j219">
                <div class="j220">
                    <div class="j212 j221">
                        <h1 class="j68 j73">Live From Space</h1>
                    </div>
                </div>
                <div class="j217 j222" style="background-image:url(&quot;/static/images/cards/live-from-space.jpg&quot;)" title="Live from space album cover">
                </div>
            </div>
        */
        return (
            <Card className="user-list-item">
                <div className="username">Paquitosoft</div>
                <div className="avatar">
                    <img src={this.state.avatarUrl} width="71" height="71" alt="Paquitosoft" />
                </div>
            </Card>
        );
    }
}

function GameHomeView() {
    return (
        <section className="game-home-view">
            <AppTitle />

            <p className="subtitle">
                Join the game created by browsing to "www.fake-and-draw.com"
                and use this private code:
            </p>
            <h2 className="match-code">
                <span className="code">XJSRRT</span>
            </h2>

            <div className="users-list">
                
            </div>
        </section>
    );
}

export default GameHomeView;
