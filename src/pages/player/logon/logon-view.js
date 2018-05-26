import React from 'react';
import TextInput from '../shared/text-input/text-input';

import './logon-view.css';

function handleChange() {
   console.log('')
}

function LogonView() {
    return (
        <section className="logon-view"> 
            <p>Just a couple of things before you start...</p> 
            <TextInput name="nickname" label="Choose your nickname"/>
            <TextInput name="code" label="Enter the game code"/>
        </section> 
    );
}

export default LogonView;
