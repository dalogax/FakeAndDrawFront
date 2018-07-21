import React, { Component } from 'react';
import { connect } from 'unistore/react';

import TextInput from '../shared/text-input/text-input';
import Button from '@material-ui/core/Button';
import { Dialog, DialogTitle, CircularProgress } from '@material-ui/core';
import actions from '../../../state/actions';
import { addUser } from '../../../api/index';

import './logon-view.css';

class LogonView extends Component {
    
    constructor() {
        super();
    
        this.state = {
          nickname: '',
          gameCode: '',
          userCreated: false
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    nicknameChanged(event) {
        this.setState({nickname: event.target.value});
    }
    
    gameCodeChanged(event) {
        this.setState({gameCode: event.target.value});
    }

    onFormSubmit() {
        const { nickname, gameCode } = this.state;

        if (nickname && gameCode) {
            this.setState({userCreated: true});
            addUser({ nickname, gameCode });
        } else {
            alert('Both inputs are required');
        }
    }

    renderFooter() {
        return this.state.userCreated ? <p>Wait until all your friends join in!!!</p> :
            <Button
                variant="raised"
                color="primary"
                onClick={this.onFormSubmit} >
                Join the game
            </Button>;
    }
    
    renderWaitingDialog() {
        return (
            <Dialog>
                <DialogTitle>Waiting until all your friends join the party!</DialogTitle>
                <CircularProgress size="50" />
            </Dialog>
        );
    }

    render() {
        return (
            <div>
                <header className="header">
                    <p>DRAW & FAKE</p>
                </header>
                <section className="logon-view"> 
                    <p className="subtitle">Just a couple of things before you start...</p> 
                    <TextInput 
                        name="nickname"
                        disabled={this.state.userCreated}
                        label="Choose your nickname"
                        autoFocus={true}
                        onChange={this.nicknameChanged.bind(this)}/>
                    <TextInput
                        name="game-code"
                        disabled={this.state.userCreated}
                        label="Enter the game code"
                        onChange={this.gameCodeChanged.bind(this)}/>
                    <div className="footer">
                        {this.renderFooter()}
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentView: state.manager.currentView
    };
}

export default connect(mapStateToProps, actions)(LogonView);
