import React from 'react';

const SocialItem = () => {
    return (
        <li className='NavItem'>
            <a href={props.link}>{props.children}</a>
        </li>
    )
}