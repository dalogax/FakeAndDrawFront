export default function addActions(registerAction) {

    registerAction('createGame', () => {
        return {
            manager: {
                currentView: 'game-home',
                matchCode: messageBody.codeGame,
                deadline: messageBody.lifespanTimestamp
            }
        };
    });

};
