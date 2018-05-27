// TODO Carlos: Just for demo purposes
import appStore from '../state/store';
import appActions from '../state/actions';

export function connectToServer(serverEndpoint, onMessageReceived) {
    console.warn('connection to server not yet implemented...');
}

/*      Manager outgoing messages        */
export function createGame() {
    /*
        {
           "type": "game-create"
        }
    */
    console.warn('Send "game-create" message to server...');
    setTimeout(() => {
        appStore.action(appActions['game-created'])({
            "codeGame": "HFKDC",
            "lifespanTimestamp": Date.now() + 10000
        });
    }, 1500);
}

/*      Player outgoing messages        */
export function addUser(message) {
    /* 
        {
            "type": "new-user",
            "body": {
                "nickname": "Nick",
                "gameCode": "HFKDC"
            }
        }
    */
    console.warn('Send "new-user" message to server...');
}
