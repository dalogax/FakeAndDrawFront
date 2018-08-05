import React from 'react';
import { connect } from 'unistore/react';
import { array } from 'prop-types';

import './match-view.css';
import UserMiniCard from '../shared/user-mini-card/user-mini-card';

function MatchView({ users }) {
    return (
        <section className="match-view">
            <p className="subtitle">
                We're waiting for all the players to submit their drawing.<br/>
                We will start playing right after we have all of them...
            </p>

            {
                users.length > 0 &&
                users.map(user => <UserMiniCard key={user.nickname} user={user} />)
            }
        </section>
    );
}

MatchView.propTypes = {
    users: array.isRequired
};

function mapStateToProps(state) {
    return {
        users: state.manager.matchUsers.filter(user => user.hasSubmittedDrawing)
    }
}

export default connect(mapStateToProps)(MatchView);
