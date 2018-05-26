import appStore from '../store';

const appActions = {};

export function registerAction(name, action) {
    appActions[name] = (state, ...args) => {
        const params = [state, ...args, appStore];
        return action.apply(null, params);
    };
}

export const getAppActions = () => appActions;

// An action received these params
//  state
//  none or several params from action invocation
//  store

registerAction('setDeviceType', (state, deviceType/*, store*/) => {
    return {
        deviceType
    };
});

export default appActions;
