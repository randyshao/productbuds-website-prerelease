import React from 'react';

const SocialItem = (props) => {
    return (
        <div className='SocialItem'>
            <a href={props.link}><img className='SocialIcon' src={props.socialImg} /></a>
        </div>
    )
}

export default SocialItem;