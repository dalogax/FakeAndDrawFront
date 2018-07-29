import shortid from 'shortid';
import Cookies from 'js-cookie';

const USER_SESSION_COOKIE_NAME = 'usi';
export const DEVICE_TYPE_MANAGER = 'manager';
export const DEVICE_TYPE_PLAYER = 'player';

let userSessionId = Cookies.get(USER_SESSION_COOKIE_NAME);

export function getUserSessionId() {
    if (!userSessionId) {
        userSessionId = `${getDeviceType() === DEVICE_TYPE_MANAGER ? 'm' : 'p'}_${shortid.generate()}`;
        // ttl is expressed in days
        Cookies.set(USER_SESSION_COOKIE_NAME, userSessionId, { ttl: 30 });
    }

    return userSessionId;
}

export function getDeviceType() {
    return window.innerWidth > 400 ? DEVICE_TYPE_MANAGER : DEVICE_TYPE_PLAYER;
}
