import React, { Component } from 'react';
import { connect } from 'unistore/react';

import TextInput from '../shared/text-input/text-input';
import Button from '@material-ui/core/Button';
import actions from '../../../state/actions';
import { addUser } from '../../../api/index';

import './logon-view.css';

function joinGame() {
    const {nickName, code} = this.state;
    if (nickName && code) {
        this.setState({userCreated: true});
        addUser({nickName, code});
    } else {
        alert('Both inputs are required');
    }
}

class LogonView extends Component {
    constructor() {
        super();
        this.state = {
          nickName: '',
          code: '',
          userCreated: false
        };
    }

    nickNameChanged(event) {
        this.setState({nickName: event.target.value});
    }
    
    codeChanged(event) {
        this.setState({code: event.target.value});
    }

    renderFooter() {
        return this.state.userCreated ? <p>Wait until all your friends join in!!!</p> :
            <Button
                variant="raised"
                color="primary"
                onClick={joinGame.bind(this)} >
                Join the game
            </Button>;
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
                        onChange={this.nickNameChanged.bind(this)}/>
                    <TextInput
                        name="code"
                        disabled={this.state.userCreated}
                        label="Enter the game code"
                        onChange={this.codeChanged.bind(this)}/>
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
