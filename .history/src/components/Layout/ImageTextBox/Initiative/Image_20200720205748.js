import React from 'react';

const Image = (props) => {
    return (
        <div class='Image'>
            <img src={props.image} alt='Product Buds Initiative'/>
        </div>
    )
}

export default Image;