import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unistore/react';

import './index.css';

import appStore from './state/store';
import actions from './state/actions';
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

connectToServer('SERVER_WEBSOCKET_URL', message => {
    const action = actions[message.type];
    
    if (action) {
        appStore.action(action)(message.body);
    } else {
        console.warn('No action found for incoming message:', message.type);
    }  
});
