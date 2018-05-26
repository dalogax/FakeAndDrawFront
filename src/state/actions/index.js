import appStore from '../store';

const appActions = {};

export function registerAction(name, action) {
    appActions[name] = (state, ...args) => {
        const params = [...args, state, appStore];
        return action.apply(null, params);
    };
}

export const getAppActions = () => appActions;

// An action received these params
//  none or several params from action invocation
//  state
//  store

registerAction('setDeviceType', (deviceType, /*state, store*/) => {
    return {
        deviceType
    };
});

export default appActions;
