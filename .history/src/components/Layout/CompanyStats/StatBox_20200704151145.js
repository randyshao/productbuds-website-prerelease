import React from 'react';

const StatBox = (props) => {
    return (
        <div>
            <h2 className='Inline'>{props.number}</h2>
            <h3>{props.platform}</h3>
        </div>
    )
}

export default StatBox;