import React from 'react';
import SocialItem from './SocialItem';
import MediumLogo from '../../../assets/medium.png'

const SocialsLinks = () => {
    return (
        <ul className='SocialsLinks'>
            <SocialItem link='/' socialImg=''></SocialItem>
            <SocialItem link='/'>Linkedin</SocialItem>
        </ul>
    )
}

export default SocialsLinks;