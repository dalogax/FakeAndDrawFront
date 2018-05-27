// TODO Carlos: Just for demo purposes
import appStore from '../state/store';
import appActions from '../state/actions';

import SockJS from 'sockjs-client';
import Stomp from "@stomp/stompjs";

const serverUrl = "http://localhost:8080/fakeanddraw";
const serverRequestUrl = "/app/request";
let stompClient = null;

export function connectToServer(onMessageReceived) {
    // var socket = new SockJS(serverUrl);
    // stompClient = Stomp.over(socket);
    // stompClient.connect({}, function (frame) {
    //     var sessionId = /\/([^\/]+)\/websocket/.exec(socket._transport.url)[1];
    //     const responseUrl = generateServerResponseUrl(sessionId);
    //     stompClient.subscribe(responseUrl, function (greeting) {
    //         onMessageReceived(greeting.body);
    //     });
    // });
}

export function sendToServer(obj) {
    stompClient.send(serverRequestUrl, {}, JSON.stringify(obj));
}

function generateServerResponseUrl(sessionId) {
    return '/user/' + sessionId + '/topic/response';
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
