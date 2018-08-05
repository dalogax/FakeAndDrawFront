export default function addActions(registerAction) {

    registerAction('updatePlayerView', (action, state) => {
        return {
            player: {
                ...state.player,
                currentView: action.payload.view
            }
        }
    });


    registerAction('title-assign', (action, state) => {
        return {
            player: {
                ...state.player,
                currentView: 'draw',
                drawTitle: action.payload.title,
                deadline: action.payload.lifespanTimestamp
            }
        }
    });

}
