import React from 'react';
import Textbox from './Textbox';
import Image from './Image';


const Initiative = (props) => {
    return (
        <div className="ImageTextBoxDisplay">
            <div class='Initiative'>
                <Textbox title='Project Jam'></Textbox>
                <Image />
            </div>
        </div>
        
    )
}

export default Initiative;