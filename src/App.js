import React, { Component } from 'react';
import { connect } from 'unistore/react';

// import logo from './logo.svg';
// import './App.css';

import actions from './state/actions';
import ManagerHomeView from './pages/manager/home/home-view';
import PlayerLogonView from './pages/player/logon/logon-view';

class App extends Component {

    componentDidMount() {
        this.props.setDeviceType(window.innerWidth > 400 ? 'manager' : 'player');
    }

    render() {
        const { deviceType } = this.props;

        if (!deviceType) return null;

        const View = (deviceType === 'manager') ? ManagerHomeView : PlayerLogonView;

        return <View />;
    }
}

export default connect('deviceType', actions)(App);
