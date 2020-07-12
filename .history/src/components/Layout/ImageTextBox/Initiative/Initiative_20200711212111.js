import React from 'react';
import Textbox from './Textbox';
import Image from './Image';


const Initiative = (props) => {
    return (
        <div className="ImageTextBoxDisplay">
            <div class='Initiative'>
                <Textbox title='Project Jam'>The Product Buds Project Jam enables you to work on collaborative projects, immerse you in the product development process, 
                and allows you to enhance your project portfolio! Whether you're an aspiring Product Manager (PM) who just stumbled 
                on this field recently or a current PM who's well-versed in many areas of Product, this opportunity will allow you to sharpen 
                core business, technical, teamwork, and interpersonal with others in the community! 😇</Textbox>
                <Image />
            </div>
        </div>
        
    )
}

export default Initiative;