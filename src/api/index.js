import SockJS from 'sockjs-client';
import Stomp from "@stomp/stompjs";

const serverUrl = "http://localhost:8080/fakeanddraw";
const serverRequestUrl = "/app/request";
var stompClient = null;

export function connectToServer(onMessageReceived) {
    var socket = new SockJS(serverUrl);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        var sessionId = /\/([^\/]+)\/websocket/.exec(socket._transport.url)[1];
        const responseUrl = generateServerResponseUrl(sessionId);
        stompClient.subscribe(responseUrl, function (greeting) {
            onMessageReceived(greeting.body);
        });
    });
}

export function sendToServer(obj) {
    stompClient.send(serverRequestUrl, {}, JSON.stringify(obj));
}

function generateServerResponseUrl(sessionId) {
    return '/user/' + sessionId + '/topic/response';
}

connectToServer(new function() {});