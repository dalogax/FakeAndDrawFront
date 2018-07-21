export default function addActions(registerAction) {

    registerAction('game-created', (messageBody, state) => {
        return {
            manager: {
                ...state.manager,
                currentView: 'game-home',
                matchCode: messageBody.gameCode,
                deadline: messageBody.lifespanTimestamp
            }
        };
    });

    registerAction('user-added', (messageBody, state) => {
        return {
            manager: {
                ...state.manager,
                matchUsers: state.manager.matchUsers.concat(messageBody)
            }
        };
    });

};
