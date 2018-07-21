import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import './countdown.css';

function calculateTtl(deadline) {
    return Math.round(Math.max(deadline - Date.now(), 0) / 1000);
}

class Countdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ttl: calculateTtl(props.deadline)
        };

        this.interval;
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const ttl = calculateTtl(this.props.deadline);

            this.setState({ ttl });
            if (ttl <= 0) {
                clearInterval(this.interval);
                this.props.onCountdownFinished(); 
            }

        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="countdown">    
                <Paper elevation={1}>
                    <Typography variant="headline" component="h3">
                        {this.props.message}
                    </Typography>
                    <Typography component="span" variant="display2">
                        {this.state.ttl}
                    </Typography>
                </Paper>
            </div>
        );
    }

}

Countdown.defaultProps = {
    onCountdownFinished: () => false
};

export default Countdown;
