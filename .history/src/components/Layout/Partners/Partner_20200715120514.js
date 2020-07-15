import React from 'react';

const Partner = (props) => {
    return (
        <div className='Partner'>
            <a href={props.link}><img src={props.company} /></a>
        </div>
    )
}

export default Partner;