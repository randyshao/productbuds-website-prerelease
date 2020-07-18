import React from 'react';

const ButtonPill = (props) => {
    return (
        <div>
            <a className='Pilllink' href={props.link}>
                <button className='Pill' style={{backgroundColor: (props.bgColor)}}>
                    {props.children}
                </button>
            </a>
        </div>
    )
}

export default ButtonPill;