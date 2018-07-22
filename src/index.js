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

connectToServer(message => {
    const action = appActions[message.type];
    
    if (action) {
        appStore.action(action)(message.payload);
    } else {
        console.warn('No action found for incoming message:', message.type);
    }  
});

