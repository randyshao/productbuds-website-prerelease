import React from 'react';
import Arrow from '../../UI/arrow-right.png';
import '../../../App.css'

const ArrowLink = (props) => {
    return (
        <span className='MarginTop'>
            <a href={props.link}>
                <h3 className='Inline'>Meet the PB Team.</h3>
                <img className='Arrow' src={Arrow} />
            </a>
        </span>
    )
}

export default ArrowLink;