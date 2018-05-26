import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import './text-input.css';

function handleChange() {
   console.log('')
}

function TextInput(props) {
    return (
        <div className="text-input">
            <FormControl >
                <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
                <Input id={props.name} onChange={handleChange} />
            </FormControl>
        </div>
    );
}

export default TextInput;