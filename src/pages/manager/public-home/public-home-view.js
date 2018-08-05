import React from 'react'
import { bool } from 'prop-types';
import { connect } from 'unistore/react';

import actions from '../../../state/actions';
import { createGame } from '../../../api';
import { Button, CircularProgress } from '@material-ui/core';
import AppTitle from '../shared/app-title/app-title';

import './public-home-view.css';

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
                <AppTitle>
                    <h1>Welcome to <span className="title">Fake & Draw</span></h1>
                </AppTitle>

                <p>You-re just a click away from a very funny game</p>
                <div>
                    <Button 
                        variant="raised" 
                        color="primary" 
                        onClick={this.createGameHandler}
                        disabled={!this.props.isServerConnected || this.state.isGameInCreation}>
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

HomeView.propTypes = {
    isServerConnected: bool
};

function mapStateToProps(state) {
    return {
        isServerConnected: state.isServerConnected
    };
}

export default connect(mapStateToProps, actions)(HomeView);
