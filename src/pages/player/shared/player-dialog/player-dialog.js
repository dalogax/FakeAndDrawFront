import React from 'react';
import { string, bool } from 'prop-types';
import { Dialog, DialogTitle, CircularProgress } from '@material-ui/core';

function PlayerDialog({ message, showOpened }) {
    return (
        <Dialog className="waiting-alert" open={showOpened}>
            <DialogTitle>{message}</DialogTitle>
            <CircularProgress className="loader-indicator" />
        </Dialog>
    );
}

PlayerDialog.propTypes = {
    message: string.isRequired,
    showOpened: bool
};

export default PlayerDialog;
