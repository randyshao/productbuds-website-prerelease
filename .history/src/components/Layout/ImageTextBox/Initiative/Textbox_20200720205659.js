import React from 'react';

const Textbox = (props) => {
    return (
        <div class='Textbox'>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    )
}

export default Textbox;