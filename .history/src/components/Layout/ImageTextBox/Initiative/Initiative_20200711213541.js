import React from 'react';
import Textbox from './Textbox';
import Image from './Image';


const InitiativeLeft = (props) => {
    return (
        <div className="ImageTextBoxDisplay">
            <div class='Initiative'>
                <Textbox title={props.title}>{props.children}</Textbox>
                <Image />
            </div>
        </div>
        
    )
}

export default InitiativeLeft;