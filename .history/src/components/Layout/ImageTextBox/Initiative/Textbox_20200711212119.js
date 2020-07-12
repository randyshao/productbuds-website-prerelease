import React from 'react';
import PBLogo from '../../../../assets/images/logos/productschool.jpg';

const Textbox = (props) => {
    return (
        <div class='Textbox'>
            <h2>{props.title}</h2>
            <p>{props.children}
            </p>
        </div>
    )
}

export default Textbox;