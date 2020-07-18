import React from 'react';
import SocialItem from './SocialItem';
import MediumLogo from '../../../assets/medium.svg'
import LinkedinLogo from '../../../assets/linkedin.svg'
import YoutubeLogo from '../../../assets/youtube.svg'

const SocialsLinks = () => {
    return (
        <div className='SocialsLinks'>
            <SocialItem link='https://medium.com/product-buds' socialImg={MediumLogo}></SocialItem>
            <SocialItem link='https://www.linkedin.com/company/productbuds/' socialImg={LinkedinLogo}></SocialItem>
            <SocialItem link='https://www.youtube.com/channel/UCU9AvSlYCjMVcMDZZ8Ei9aA' socialImg={YoutubeLogo}></SocialItem>
        </div>
    )
}

export default SocialsLinks;