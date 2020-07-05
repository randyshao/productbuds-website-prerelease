import React from 'react';
import SocialItem from './SocialItem';

const SocialsLinks = () => {
    return (
        <ul className='SocialsLinks'>
            <SocialItem link='/'>Medium</SocialItem>
            <SocialItem link='/'>Linkedin</SocialItem>
        </ul>
    )
}

export default SocialsLinks;