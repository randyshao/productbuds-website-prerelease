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
        'productschool',
    ]

    return (
        <div className='PartnerContainer'>
            <Partner company={ProductSchool} link='https://productschool.com/'/>
            <Partner company={Wonsulting} link='https://www.wonsulting.com/'/>
            <Partner company={APMC} link='https://pmclub.io/'/>
            <Partner company={HelpYourPeers} link='https://helpyourpeers.com/'/>
            <Partner company={RocketBlocks} link='https://www.rocketblocks.me/'/>
            <Partner company={RemoteStudents} link='https://remotestudents.co/'/>
        </div>
    )
}

export default PartnerContainer;