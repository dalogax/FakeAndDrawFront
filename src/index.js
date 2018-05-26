import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unistore/react';

import './index.css';

import appStore from './state/store';
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
