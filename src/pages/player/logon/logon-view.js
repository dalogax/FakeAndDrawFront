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
        this.setState({disabled: true});
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
          disabled: false
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
                <TextInput 
                    name="nickname"
                    disabled={this.state.disabled}
                    label="Choose your nickname"
                    onChange={this.nickNameChanged.bind(this)}/>
                <TextInput
                    name="code"
                    disabled={this.state.disabled}
                    label="Enter the game code"
                    onChange={this.codeChanged.bind(this)}/>
                <div className="footer">
                    <Button disabled={this.state.disabled}
                        variant="raised"
                        color="primary"
                        onClick={joinGame.bind(this)} >
                        Join the game
                    </Button>
                </div>
            </section> 
        );
    }
}

function mapStateToProps(state) {
    return {
        currentView: state.manager.currentView
    };
}

export default connect(mapStateToProps, actions)(LogonView);
