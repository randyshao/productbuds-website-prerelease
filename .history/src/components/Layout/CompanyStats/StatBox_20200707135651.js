import React from 'react';

const StatBox = (props) => {
    return (
        <div className='Statbox MarginTop'>
            <div className='center'>
                <h1 className='Inline'>{props.number}</h1>
                <h3>{props.platform}</h3>
            </div>
        </div>
    )
}

export default StatBox;