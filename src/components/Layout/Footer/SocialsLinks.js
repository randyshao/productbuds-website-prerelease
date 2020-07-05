import React from 'react';
import SocialItem from './SocialItem';
import MediumLogo from '../../../assets/medium.png'
import LinkedinLogo from '../../../assets/linkedin.png'

const SocialsLinks = () => {
    return (
        <ul className='SocialsLinks'>
            <SocialItem link='https://medium.com/product-buds' socialImg={MediumLogo}></SocialItem>
            <SocialItem link='https://www.linkedin.com/company/productbuds/' socialImg={LinkedinLogo}></SocialItem>
        </ul>
    )
}

export default SocialsLinks;