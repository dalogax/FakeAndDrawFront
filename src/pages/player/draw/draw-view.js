import React from 'react';
import { string, number } from 'prop-types';
import { Button } from '@material-ui/core';
import CanvasDraw from "react-canvas-draw";

import './draw-view.css';
import { connect } from 'unistore/react';
import { submitDrawing } from '../../../api';
import PlayerDialog from '../shared/player-dialog/player-dialog';

class DrawView extends React.Component {

    constructor() {
        super();
        
        this.state = {
            showDialog: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        console.log(this.canvas);
        // console.log(this.canvas.getSaveData());
        console.log('Canvas data length:', this.canvas.getSaveData().length);
        // console.log(this.canvas.canvas.toDataURL('image/png', 1));
        console.log('Data URL length:', this.canvas.canvas.toDataURL('image/png', 0.5).length);
        submitDrawing({ drawingData: this.canvas.getSaveData() });
        this.setState({ showDialog: true });
    }

    renderWaitingDialog(showDialog) {
        return (
            <PlayerDialog 
                message="Waiting until all your friends finish their drawings..." 
                showOpened={showDialog} 
            />
        );
    }

    render() {
        const { drawTitle/*, deadline*/ } = this.props;
        const sectionHeight = window.innerHeight - 105;
        const sectionWidth = window.innerWidth - 16; // 16 = body margin
        // onClick={this.createGameHandler}
        // disabled={!this.props.isServerConnected || this.state.isGameInCreation}
        return (
            <section className="draw-view">
                <header>
                    {drawTitle}
                </header>
                <section style={{ height: sectionHeight}}>
                    <CanvasDraw
                        ref={node => { this.canvas = node; }}
                        canvasHeight={sectionHeight - 10}
                        canvasWidth={sectionWidth}
                    />
                </section>
                <footer>
                    <div className="wrapper">
                    <Button 
                        variant="raised" 
                        color="primary" 
                        onClick={this.onSubmit}
                        disabled={this.state.showDialog}
                    >
                        Send!
                    </Button>
                    </div>
                </footer>
    
                {this.renderWaitingDialog(this.state.showDialog)}

            </section>
        );
    }

}

DrawView.propTypes = {
    drawTitle: string.isRequired,
    deadline: number.isRequired
};

function mapStateToProps(state) {
    return {
        drawTitle: state.player.drawTitle,
        deadline: state.player.deadline
    };
}

export default connect(mapStateToProps)(DrawView);
