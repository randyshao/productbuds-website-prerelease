import React from 'react';
import Arrow from '../../UI/arrow-right.png';

const ArrowLink = () => {
    return (
        <span>
            <h3 className='Inline'>Meet the PB Team.</h3>
            <img className='Arrow' src={Arrow} />
        </span>
    )
}

export default ArrowLink;