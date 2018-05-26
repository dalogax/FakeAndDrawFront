export default function addActions(registerAction) {

    registerAction('game-created', (messageBody) => {
        return {
            manager: {
                currentView: 'game-home',
                matchCode: messageBody.codeGame,
                deadline: messageBody.lifespanTimestamp
            }
        };
    });

};
