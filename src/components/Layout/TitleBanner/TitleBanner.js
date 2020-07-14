import React from 'react';
import PBLogo from '../../../assets/images/flat-logo.svg';
import '../../../App.css';

const TitleBanner = () => {
    return (
        <div className='TitleBanner'>
            <div className='TitleBanner-MainContent'>
                <h1 className='BannerMain'>A community where budding product managers flourish.</h1>
                <h3 className='Tagline'>sprout. grow. flourish.</h3>
            </div>
            <img className='BannerImage' src={PBLogo} alt="Product Buds Logo"/>
        </div>
    )
}

export default TitleBanner;
