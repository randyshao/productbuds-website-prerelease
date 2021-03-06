import React from 'react';
import Partner from './Partner'
import ProductSchool from '../../../assets/images/logos/productschool.jpg'
import HelpYourPeers from '../../../assets/images/logos/helpyourpeers.jpg'
import RocketBlocks from '../../../assets/images/logos/rocketblocks.png'
import Wonsulting from '../../../assets/images/logos/wonsulting.png'
import APMC from '../../../assets/images/logos/apmc.png'
import RemoteStudents from '../../../assets/images/logos/remotestudents.jpg'

const PartnerContainer = () => {

    const partners = [
        { company: ProductSchool, link: 'https://productschool.com/'},
        { company: Wonsulting, link: 'https://www.wonsulting.com/'},
        { company: APMC, link: 'https://pmclub.io/'},
        { company: HelpYourPeers, link: 'https://helpyourpeers.com/'},
        { company: RocketBlocks, link: 'https://www.rocketblocks.me/'},
        { company: RemoteStudents, link: 'https://remotestudents.co/'}
    ]

    return (
        <div className='PartnerContainer'>
            {partners.map(logo => (
                <Partner
                    company={logo.company}
                    link={logo.link}
                />
            ))}
        </div>
    )
}

export default PartnerContainer;