import React from 'react';
import PBLogo from '../../../assets/images/flat-logo-transparent.png';
import '../../../App.css';

const TitleBanner = () => {
    return (
        <div className='TitleBanner'>
                <h1 className='BannerMargin'>A community where budding product managers flourish.<span><strong>sprout. grow. flourish.</strong></span></h1>
                
                <div className='PaddingBottom'>
                    <img className='BannerImage' src={PBLogo} alt="Product Buds Logo"/>
                </div>
        </div>
    )
}

export default TitleBanner;
