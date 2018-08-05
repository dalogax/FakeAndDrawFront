import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unistore/react';
import appStore from './state/store';
import appActions from './state/actions';
import { connectToServer } from './api';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Main() {
    return (
        <Provider store={appStore}>
            <App />
        </Provider>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();

connectToServer({
    onConnection: () => {
        appStore.action(appActions.connectedToServer)();
    },
    onMessageReceived: message => {
        const action = appActions[message.type];
        
        if (action) {
            // message is a FSA action like json object 
            // (https://github.com/redux-utilities/flux-standard-action)
            appStore.action(action)(message);
        } else {
            console.warn('No action found for incoming message:', message.type);
        }  
    }
})
