import React from 'react';
import PBLogo from '../../../../assets/images/logos/productschool.jpg';

const Textbox = (props) => {
    return (
        <div class='Textbox'>
            <h2>{props.title}</h2>
            <p>The Product Buds Project Jam enables you to work on collaborative projects, immerse you in the product development process, 
                and allows you to enhance your project portfolio! Whether you're an aspiring Product Manager (PM) who just stumbled 
                on this field recently or a current PM who's well-versed in many areas of Product, this opportunity will allow you to sharpen 
                core business, technical, teamwork, and interpersonal with others in the community! 😇
            </p>
        </div>
    )
}

export default Textbox;