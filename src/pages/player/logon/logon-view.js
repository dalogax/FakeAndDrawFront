import React, { Component } from 'react';
import TextInput from '../shared/text-input/text-input';
import Button from '@material-ui/core/Button';


import './logon-view.css';



function joinGame() {
    alert(`nickname: ${this.state.nickName} and code: ${this.state.code}`);
}

class LogonView extends Component {
    constructor() {
        super();
        this.state = {
          nickName: '',
          code: ''
        };
    }

    nickNameChanged(event) {
        this.setState({nickName: event.target.value});
    }
    
    codeChanged(event) {
        this.setState({code: event.target.value});
    }
    
    render() {
        return (
            <section className="logon-view"> 
                <p className="subtitle">Just a couple of things before you start...</p> 
                <TextInput name="nickname" label="Choose your nickname" onChange={this.nickNameChanged.bind(this)}/>
                <TextInput name="code" label="Enter the game code" onChange={this.codeChanged.bind(this)}/>
                <Button color="primary" className="button" onClick={joinGame.bind(this)}>
                    Join the game
                </Button>
            </section> 
        );
    }
}

export default LogonView;
