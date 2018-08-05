import React from 'react';
import { element } from 'prop-types';

import './app-title.css';

function AppTitle({ message }) {
    const _message = message || 
        (<h1>Welcome to <span className="title">Fake & Draw</span></h1>);
    return (
        <section className="app-title">
            {_message}
        </section>
    );
}

AppTitle.propTypes = {
    message: element
}

export default AppTitle;
