export default function addActions(registerAction) {

    /* -------------- SERVER GENERATED ACTIONS ----------------- */
    registerAction('game-created', (action, state) => {
        return {
            manager: {
                ...state.manager,
                currentView: 'game-home',
                matchCode: action.payload.gameCode,
                deadline: action.payload.lifespanTimestamp
            }
        };
    });

    registerAction('user-added', (action, state) => {
        return {
            manager: {
                ...state.manager,
                matchUsers: state.manager.matchUsers.concat(action.payload)
            }
        };
    });

    registerAction('drawing-started', (action, state) => {
        return {
            manager: {
                ...state.manager,
                currentView: 'match',
                deadline: action.payload.deadline
            }
        };
    });

    registerAction('drawing-added', (action, state) => {
        const { userId, nickname } = action.payload;
        const _user = state.manager.matchUsers.find(user => {
            return user.id === userId || user.nickname === nickname;
        });

        if (_user) {
            _user.hasSubmittedDrawing = true;
        }

        return {
            manager: {
                ...state.manager,
                matchUsers: [].concat(state.manager.matchUsers)
            }
        };
    });


    /* -------------- USER GENERATED ACTIONS ----------------- */
    registerAction('updateManagerView', (viewCode, state) => {
        return {
            manager: {
                ...state.manager,
                currentView: viewCode
            }
        }
    });


}
