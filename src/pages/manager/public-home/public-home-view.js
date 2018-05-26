import React from 'react'
import { connect } from 'unistore/react';

import actions from '../../../state/actions';

class HomeView extends React.Component {
    render() {
        const { currentView, matchCode } = this.props;
        return (
            <section className="manager-home-page">
                <h1>Fake & Draw!!! manager</h1>

                <p>Current View: {currentView}</p>
                <p>Match Code: {matchCode}</p>
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
