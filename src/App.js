import React, { Component } from 'react';
import { connect } from 'unistore/react';

// import logo from './logo.svg';
// import './App.css';

import { connectToServer } from './api';
import actions from './state/actions';
import ManagerPublicHomeView from './pages/manager/public-home/public-home-view';
import ManagerGameHomeView from './pages/manager/game-home/game-home-view';
import PlayerLogonView from './pages/player/logon/logon-view';

const viewsMap = {
    manager: {
        'public-home': ManagerPublicHomeView,
        'game-home': ManagerGameHomeView
    },
    player: {
        'logon': PlayerLogonView
    }
};

class App extends Component {

    componentDidMount() {
        this.props.setDeviceType(window.innerWidth > 400 ? 'manager' : 'player');

        connectToServer('SERVER_WEBSOCKET_URL', message => {
            const action = this.props[message.type];
            
            // TODO Carlos: CAUTION! We're receiving messages for both
            // manager and player areas and the user is only using one
            // of them
            // We DON'T want to update current view of another area
            if (action) {
                action(message.body);
            } else {
                console.warn('No action found for incoming message:', message.type);
            }  
        });
    }

    render() {
        const View = this.props.CurrentView;

        if (!View) return null;

        return <View />
    }
}

function mapStateToProps(state) {
    // Carlos: We need to handle only views for the deviceType
    // we're currently on
    const { deviceType } = state;
    const currentViewCode = deviceType ? state[deviceType].currentView : null;
    let CurrentView = null;
    
    if (deviceType) {
        CurrentView = viewsMap[deviceType][currentViewCode];
    }

    return {
        deviceType: state.deviceType,
        CurrentView
    }
}

export default connect(mapStateToProps, actions)(App);
