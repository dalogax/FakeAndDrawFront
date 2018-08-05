import appStore from '../store';
import addManagerActions from './manager-actions';
import addPlayerActions from './player-actions';

const appActions = {};

export function registerAction(name, action) {
    appActions[name] = (state, ...args) => {
        const params = [...args, state, appStore];
        return action.apply(null, params);
    };
}

export const getAppActions = () => appActions;

// An action received these params
//  * none or several params from action invocation
//  * state
//  * store

registerAction('setDeviceType', (deviceType, /*state, store*/) => {
    return {
        deviceType
    };
});

registerAction('connectedToServer', () => ({ isServerConnected: true }));

addManagerActions(registerAction);
addPlayerActions(registerAction);

export default appActions;
