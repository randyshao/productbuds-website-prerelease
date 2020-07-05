import React from 'react';
import SocialItem from './SocialItem';
import MediumLogo from '../../../assets/medium.png'
import LinkedinLogo from '../../../assets/linkedin.png'

const SocialsLinks = () => {
    return (
        <ul className='SocialsLinks'>
            <SocialItem link='/' socialImg={MediumLogo}></SocialItem>
            <SocialItem link='/' socialImg={LinkedinLogo}></SocialItem>
        </ul>
    )
}

export default SocialsLinks;