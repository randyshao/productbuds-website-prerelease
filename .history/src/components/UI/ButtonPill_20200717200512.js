import React from 'react';

const ButtonPill = (props) => {
    return (
        <div>
            <button className='Pill' style={{backgroundColor: (props.bgColor)}}>
                <a style={{color: (props.color)}} href={props.link}>
                    {props.children}
                </a>
            </button>
        </div>
    )
}

export default ButtonPill;