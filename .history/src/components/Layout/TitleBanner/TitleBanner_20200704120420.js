import React from 'react';
import PBLogo from '../../assets/images/flat-logo-transparent.png';

const TitleBanner = () => {
    return (
        <div className='TitleBanner'>
            <div className='Container'> 
                <h1 className='BannerMargin'>A community for aspiring product managers.</h1>
                <img src={PBLogo} alt="Product Buds Logo"/>
            </div>
        </div>
    )
}

export default TitleBanner;
