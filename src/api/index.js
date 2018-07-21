import appStore from '../state/store';
import appActions from '../state/actions';

import SockJS from 'sockjs-client';
import Stomp from "@stomp/stompjs";

// const serverUrl = "http://vulcano:8080/fakeanddraw";
const serverUrl = 'https://fakeanddraw.herokuapp.com/fakeanddraw';
const serverRequestUrl = "/request";
let stompClient = null;

export function connectToServer(onMessageReceived) {
    const socket = new SockJS(serverUrl);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        const sessionId = /\/([^\/]+)\/websocket/.exec(socket._transport.url)[1];
        stompClient.subscribe(`/user/${sessionId}/response`, (message) => {
            onMessageReceived(JSON.parse(message.body));
        });
    });
}

export function sendToServer(message) {
    stompClient.send(serverRequestUrl, {}, JSON.stringify(message));
}


/*      Manager outgoing messages        */
export function createGame() {
    /*
        {
           "type": "game-create"
        }
    */
    sendToServer({ type: 'game-create' });
}

/*      Player outgoing messages        */
export function addUser({ nickname, gameCode }) {
    /* 
        {
            "type": "new-user",
            "body": {
                "nickname": "Nick",
                "gameCode": "HFKDC"
            }
        }
    */
    sendToServer({
        type: 'new-user',
        payload: { nickname, gameCode }
    });
}
