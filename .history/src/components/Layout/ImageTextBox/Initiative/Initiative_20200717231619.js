import React from 'react';
import Textbox from './Textbox';
import Image from './Image';


const Initiative = (props) => {
    return (
        <div className="MainContainer">
            <div class='Initiative'>
                <Textbox title={props.title}>{props.children}</Textbox>
                <Image image={props.image}/>
            </div>
        </div>
    )
}

export default Initiative;