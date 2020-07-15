import React from 'react';
import '../../../App.scss';

const StatBox = (props) => {
    return (
        <div className= 'Statbox MarginTop' >
            <h1 className='Inline Stat'>{props.number}</h1>
            <h3 className='Platform'>{props.platform}</h3>
        </div>
    )
}

export default StatBox;