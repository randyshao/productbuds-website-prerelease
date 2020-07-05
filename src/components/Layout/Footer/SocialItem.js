import React from 'react';

const SocialItem = (props) => {
    return (
        <li className='SocialItem'>
            <a href={props.link}><img className='SocialIcon' src={props.socialImg} /></a>
        </li>
    )
}

export default SocialItem;