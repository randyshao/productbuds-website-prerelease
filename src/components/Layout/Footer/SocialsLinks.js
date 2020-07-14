import React from 'react';
import SocialItem from './SocialItem';
import MediumLogo from '../../../assets/medium.svg'
import LinkedinLogo from '../../../assets/linkedin.svg'
import SlackLogo from '../../../assets/slack.svg'

const SocialsLinks = () => {
    return (
        <div className='SocialsLinks'>
            <SocialItem link='https://medium.com/product-buds' socialImg={MediumLogo}></SocialItem>
            <SocialItem link='https://www.linkedin.com/company/productbuds/' socialImg={LinkedinLogo}></SocialItem>
            <SocialItem link='https://join.slack.com/t/productbuds/shared_invite/zt-et5fp1yt-Lygg94zjkqTVg9BNdaHuFA' socialImg={SlackLogo}></SocialItem>
        </div>
    )
}

export default SocialsLinks;