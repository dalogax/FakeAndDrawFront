import createStore from 'unistore';
import devtools from 'unistore/devtools';

export const appStore = createStore({
    deviceType: '',
    manager: {
        currentView: 'home-view',
        matchCode: null,
        deadline: null,
        matchStatus: ''
    },
    player: {
        currentView: 'logon-view'
    }
});

export default process.env.NODE_ENV === 'production' ?  appStore : devtools(appStore);
