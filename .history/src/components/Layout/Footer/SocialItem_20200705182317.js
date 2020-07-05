import React from 'react';

const SocialItem = (props) => {
    return (
        <li className='SocialItem'>
            <a href={props.link}><img src={props.socialImg}>{props.children}</img></a>
        </li>
    )
}

export default SocialItem;