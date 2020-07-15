import React from 'react';
import Textbox from './Textbox';
import Image from './Image';


const Initiative = (props) => {
    return (
        <div className="ImageTextBoxDisplay ">
            <div class='Initiative MainContent'>
                <Textbox title={props.title}>{props.children}</Textbox>
                <Image image={props.image}/>
            </div>
        </div>
        
    )
}

export default Initiative;