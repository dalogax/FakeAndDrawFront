/* global process */
import createStore from 'unistore';
import devtools from 'unistore/devtools';
import { DEVICE_TYPE_MANAGER, DEVICE_TYPE_PLAYER } from '../plugins/utils';

export const appStore = createStore({
    deviceType: '',
    isServerConnected: false,
    [DEVICE_TYPE_MANAGER]: {
        currentView: 'public-home',
        matchCode: null,
        matchUsers: [],
        deadline: null,
        matchStatus: ''
    },
    [DEVICE_TYPE_PLAYER]: {
        currentView: 'logon'
    }
});

export default process.env.NODE_ENV === 'production' ?  appStore : devtools(appStore);
