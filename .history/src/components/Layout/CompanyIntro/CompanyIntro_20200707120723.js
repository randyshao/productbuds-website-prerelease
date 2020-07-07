import React from 'react';
import ArrowLink from './ArrowLink';
import PBLogo from '../../../assets/images/drop-logo-transparent.svg';

const CompanyIntro = () => {
    return (
        <div className='CompanyIntro'>
            <div className='AboutPB'>
                <h2>What is Product Buds?</h2>
                <p>Product Buds (PB) is a community where budding product managers sprout, grow, and flourish. We maintain a diverse, inclusive, and welcoming environment for aspiring 
                    Product Managers of all social identities, cultural identities, and career backgrounds. At PB, members share Product Management (PM) knowledge, make meaningful 
                    connections, and strive towards goals together.</p>
                    <ArrowLink link='/about'/>
            </div>
            <img className='BannerImage' src={PBLogo} alt="Product Buds Logo"/>
        </div>
    )
}

export default CompanyIntro;