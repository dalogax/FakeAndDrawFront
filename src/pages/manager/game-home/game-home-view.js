import React from 'react';
import { connect } from 'unistore/react';

import { getJson } from '../../../plugins/ajax';

import './game-home-view.css';

import AppTitle from '../shared/app-title/app-title';
import Countdown from '../shared/countdown/countdown';

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            avatarUrl: 'http://via.placeholder.com/71X71'
        };
    }

    componentWillMount() {
        getJson('https://tinyfac.es/api/users')
            .then(data => {
                console.log(data);
                const person = data[0];
                const avatarUrl = person.avatars
                    .filter(avatarData => avatarData.size === 'small')[0]
                    .url;

                if (avatarUrl) {
                    this.setState({ avatarUrl });
                }
            });
    }

    render() {
        return (
            <div className="user-list-item">
                <div className="avatar">
                    <img src={this.state.avatarUrl} width="71" height="71" alt="Paquitosoft" />
                </div>
                <div className="username">{this.props.user.nickname}</div>
            </div>
        );
    }
}

function GameHomeView({ matchCode, matchUsers, deadline }) {
    console.log(new Date(deadline));
    console.log(new Date());
    return (
        <section className="game-home-view">
            <AppTitle />

            <p className="subtitle">
                Join the game created by browsing to "www.fake-and-draw.com"
                and use this private code:
            </p>
            <h2 className="match-code">
                <span className="code">{matchCode}</span>
            </h2>

            <div className="users-list">
                {matchUsers.map(user => (<User user={user} key={user.nickname} />))}
            </div>

            <Countdown message="Time for the game to begin:" deadline={deadline || (Date.now() + 10000)} />
        </section>
    );
}

function mapStatToProps(state) {
    return {
        matchCode: state.manager.matchCode,
        matchUsers: state.manager.matchUsers,
        deadline: state.manager.deadline
    };
}

export default connect(mapStatToProps)(GameHomeView);
