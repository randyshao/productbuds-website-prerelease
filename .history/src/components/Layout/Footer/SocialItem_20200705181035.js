import React from 'react';

const SocialItem = (props) => {
    return (
        <li className='NavItem'>
            <a href={props.link}>{props.children}</a>
        </li>
    )
}

export default SocialItem;