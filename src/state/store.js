import createStore from 'unistore';
import devtools from 'unistore/devtools';

export const appStore = createStore({
    deviceType: '',
    manager: {
        currentView: 'public-home',
        matchCode: null,
        deadline: null,
        matchStatus: ''
    },
    player: {
        currentView: 'logon'
    }
});

export default process.env.NODE_ENV === 'production' ?  appStore : devtools(appStore);
