import React from 'react';
import SocialItem from './SocialItem';

const SocialsLinks = () => {
    return (
        <ul className='NavLinks'>
            <SocialItem link='/'>Medium</SocialItem>
            <SocialItem link='/'>Linkedin</SocialItem>
        </ul>
    )
}

export default SocialsLinks;