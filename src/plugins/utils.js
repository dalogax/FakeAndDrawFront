import shortid from 'shortid';
import Cookies from 'js-cookie';

const USER_SESSION_COOKIE_NAME = 'usi';

let userSessionId = Cookies.get(USER_SESSION_COOKIE_NAME);

export function getUserSessionId() {
    if (!userSessionId) {
        userSessionId = shortid.generate();
        // ttl is expressed in days
        Cookies.set(USER_SESSION_COOKIE_NAME, userSessionId, { ttl: 30 });
    }

    return userSessionId;
}
