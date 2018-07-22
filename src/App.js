import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'unistore/react';

import actions from './state/actions';
import ManagerPublicHomeView from './pages/manager/public-home/public-home-view';
import ManagerGameHomeView from './pages/manager/game-home/game-home-view';
import PlayerLogonView from './pages/player/logon/logon-view';

import './App.css';

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
    }

    render() {
        const View = this.props.CurrentView;

        if (!View) return null;

        return <View />
    }
}

App.propTypes = {
    CurrentView: func, // Component constructor
    setDeviceType: func.isRequired
};

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
