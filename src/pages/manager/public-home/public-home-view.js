import React from 'react'
import { connect } from 'unistore/react';

import actions from '../../../state/actions';
import { createGame } from '../../../api';

import './public-home-view.css';
import { Button, CircularProgress } from '@material-ui/core';

class HomeView extends React.Component {
    constructor() {
        super();
        this.state = {
            isGameInCreation: false
        };
        this.createGameHandler = this.createGameHandler.bind(this);
    }

    createGameHandler() {
        createGame();
        this.setState({
            isGameInCreation: true
        })
    }

    render() {
        // TODO Create game button must be disabled until we're connected to the server
        // or connect to the server right before sending create game message
        return (
            <section className="manager-home-view">
                <h1>Welcome to <span className="app-title">Fake & Draw</span></h1>

                <p>You-re just a click away from a very funny game</p>
                <div>
                    <Button 
                        variant="raised" 
                        color="primary" 
                        onClick={this.createGameHandler}
                        disabled={this.state.isGameInCreation}>
                        Create game
                    </Button>
                    {
                        this.state.isGameInCreation &&
                        <CircularProgress size={24} className="button-loader" />
                    }
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentView: state.manager.currentView,
        matchCode: state.manager.matchCode
    };
}

export default connect(mapStateToProps, actions)(HomeView);
