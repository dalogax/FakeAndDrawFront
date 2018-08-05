import React, { Component } from 'react';

import TextInput from '../shared/text-input/text-input';
import Button from '@material-ui/core/Button';
import { addUser } from '../../../api/index';

import './logon-view.css';
import PlayerDialog from '../shared/player-dialog/player-dialog';

class LogonView extends Component {
    
    constructor() {
        super();
    
        this.state = {
            nickname: '',
            gameCode: '',
            isUserCreated: false
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
            this.setState({isUserCreated: true});
            addUser({ nickname, gameCode });
        } else {
            alert('Both inputs are required');
        }
    }

    renderFooter() {
        return this.state.isUserCreated ? <p>Wait until all your friends join in!!!</p> :
            <Button
                variant="raised"
                color="primary"
                onClick={this.onFormSubmit} >
                Join the game
            </Button>;
    }
    
    renderWaitingDialog(showOpened) {
        return (
            <PlayerDialog 
                message="Waiting until all your friends join the party!" 
                showOpened={showOpened} 
            />
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
                        disabled={this.state.isUserCreated}
                        label="Choose your nickname"
                        autoFocus={true}
                        onChange={this.nicknameChanged.bind(this)}/>
                    <TextInput
                        name="game-code"
                        disabled={this.state.isUserCreated}
                        label="Enter the game code"
                        onChange={this.gameCodeChanged.bind(this)}/>
                    <div className="footer">
                        {this.renderFooter()}
                    </div>

                    {this.renderWaitingDialog(this.state.isUserCreated)}

                </section>
            </div>
        );
    }
}

export default LogonView;
