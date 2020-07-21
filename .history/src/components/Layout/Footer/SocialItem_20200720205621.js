import React from 'react';

const SocialItem = (props) => {
    return (
        <div className='SocialItem'>
            <a href={props.link}><img className='SocialIcon' src={props.socialImg} alt='Social Media'/></a>
        </div>
    )
}

export default SocialItem;