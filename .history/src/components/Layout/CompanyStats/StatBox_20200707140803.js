import React from 'react';

const StatBox = (props) => {
    return (
        <div className='Statbox MarginTop'>
            <h1 className='Inline'>{props.number}</h1>
            <h3>{props.platform}</h3>
        </div>
    )
}

export default StatBox;