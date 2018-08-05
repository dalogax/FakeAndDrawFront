import SockJS from 'sockjs-client';
import Stomp from "@stomp/stompjs";
import { getUserSessionId } from '../plugins/utils';

// const SERVER_URL = "http://vulcano:8080/fakeanddraw";
// const SERVER_URL = 'http://192.168.0.5:8080/fakeanddraw';
const SERVER_URL = 'https://fakeanddraw.herokuapp.com/fakeanddraw';
const serverRequestUrl = "/request";
let stompClient = null;

function onConnectedToServer({ client, userSessionId, onConnection, onMessageReceived }) {
    onConnection.call();

    client.subscribe(`/user/${userSessionId}/response`, (message) => {
        onMessageReceived(JSON.parse(message.body));
    });
}

function onConnectionError(error) {
    console.error('Error connecting to server:', error);
}

export function connectToServer({ onConnection, onMessageReceived }) {
    const userSessionId = getUserSessionId();

    const socketConnectionOptions = {
        sessionId: () => userSessionId
    };

    // Stomp needs the 'over' call to be provided a factory function to properly
    // integrate with StockJS
    // https://github.com/stomp-js/stomp-websocket/issues/15
    // https://stomp-js.github.io/stomp-websocket/codo/extra/docs-src/sockjs.md.html
    stompClient = Stomp.over(() => new SockJS(SERVER_URL, null, socketConnectionOptions));
    stompClient.reconnect_delay = 5000; // eslint-disable-line camelcase

    stompClient.connect(
        // https://stomp-js.github.io/stomp-websocket/codo/extra/docs-src/Usage.md.html#toc_5
        {}, // headers 
        onConnectedToServer.bind(null, {
            client: stompClient, 
            userSessionId, 
            onConnection, 
            onMessageReceived
        }),
        onConnectionError
    );
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

export function submitDrawing({ drawingData }) {
    // Drawing data is a string
    sendToServer({
        type: "drawing-submit",
        payload: {
            image: drawingData
        }
    });
}
