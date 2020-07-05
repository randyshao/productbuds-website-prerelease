import React from 'react';

const StatBox = (props) => {
    return (
        <div>
            <h2 className='Inline'>{props.number}</h2>
            <h3 className='Inline'>members on slack</h3>
        </div>
    )
}

export default StatBox;