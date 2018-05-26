import createStore from 'unistore';
import devtools from 'unistore/devtools';

export const appStore = createStore({
    deviceType: '',
    manager: {
        matchStatus: ''
    },
    player: {}
});

export default process.env.NODE_ENV === 'production' ?  appStore : devtools(appStore);
