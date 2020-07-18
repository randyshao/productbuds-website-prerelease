import React from 'react';

const ButtonPill = (props) => {
    return (
        <div>
            <button className='Pill' style={{color: (props.color), backgroundColor: (props.bgColor)}}>{props.children}</button>
        </div>
    )
}

export default ButtonPill;