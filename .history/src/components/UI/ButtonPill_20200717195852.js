import React from 'react';

const ButtonPill = (props) => {
    return (
        <div>
            <button className='Pill' style={{color: (props.color), backgroundColor: (props.bgColor)}}>
                <a href={props.link}>
                    {props.children}
                </a>
            </button>
        </div>
    )
}

export default ButtonPill;