import React from 'react';
import Partner from './Partner'
import ProductSchool from '../../../assets/images/logos/productschool.jpg'
import HelpYourPeers from '../../../assets/images/logos/helpyourpeers.jpg'
import RocketBlocks from '../../../assets/images/logos/rocketblocks.png'
import Wonsulting from '../../../assets/images/logos/wonsulting.png'
import APMC from '../../../assets/images/logos/apmc.png'
import RemoteStudents from '../../../assets/images/logos/remotestudents.jpg'

const Partners = () => {
    return (
        <div className='Partners'>
            <h2>We have collaborated on events with:</h2>
            <Partner company={ProductSchool} />
            <Partner company={Wonsulting} />
            <Partner company={APMC} />
            <Partner company={HelpYourPeers} />
            <Partner company={RocketBlocks} />
            <Partner company={RemoteStudents} />
        </div>
    )
}

export default Partners;