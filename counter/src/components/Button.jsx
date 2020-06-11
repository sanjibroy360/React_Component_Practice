import React from 'react';

function Button(props) {
    return <button onClick={props.handleClick}>{props.children}</button>
}

export default Button;