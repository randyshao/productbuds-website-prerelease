import React from 'react';
import PBLogo from '../../../assets/images/flat-logo-transparent.png';
import '../../../App.css';

const TitleBanner = () => {
    return (
        <div className='TitleBanner'>
            <div className='MainContent'>
                <h1 className='BannerMargin'>A community where budding product managers flourish.</h1>
                <img className='BannerImage' src={PBLogo} alt="Product Buds Logo"/>
            </div>
        </div>
    )
}

export default TitleBanner;
