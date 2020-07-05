import React from 'react';

const ButtonPill = (props) => {
    return (
        <div>
            <button className='Pill' style={{color: (props.color)}}>Let's Connect</button>
        </div>
    )
}

export default ButtonPill;