import shortid from 'shortid';
import { get/*, set*/ } from 'lscache';

export const DEVICE_TYPE_MANAGER = 'manager';
export const DEVICE_TYPE_PLAYER = 'player';

export function getDeviceType() {
    return (window.innerWidth / window.devicePixelRatio) > 400 ? DEVICE_TYPE_MANAGER : DEVICE_TYPE_PLAYER;
}

const USER_SESSION_KEY = `${getDeviceType}-usi`;

let userSessionId = get(USER_SESSION_KEY);

export function getUserSessionId() {
    if (!userSessionId) {
        userSessionId = `${getDeviceType() === DEVICE_TYPE_MANAGER ? 'm' : 'p'}_${shortid.generate()}`;
        // ttl is expressed in minutes
        //set(USER_SESSION_KEY, userSessionId, { ttl: 60 * 24 * 30 });
    }

    return userSessionId;
}

