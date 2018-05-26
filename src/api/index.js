
export function connectToServer(serverEndpoint, onMessageReceived) {
    setTimeout(() => {
        onMessageReceived({
            "type": "game-created",
            "body": {
                "codeGame": "HFKDC",
                "lifespanTimestamp": Date.now() + 10000
            }
        });
    }, 5000);
}