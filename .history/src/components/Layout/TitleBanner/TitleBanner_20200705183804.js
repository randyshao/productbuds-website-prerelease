import React from 'react';
import PBLogo from '../../../assets/images/flat-logo-transparent.png';
import '../../../App.css';

const TitleBanner = () => {
    return (
        <div className='TitleBanner'>
            <div className="Container">
                <h1 className='BannerMargin'>A community for aspiring product managers.</h1>
                <p><strong>sprout. grow. flourish.</strong></p>
                <div className='PaddingBottom'>
                    <img className='BannerImage' src={PBLogo} alt="Product Buds Logo"/>
                </div>
            </div>
        </div>
    )
}

export default TitleBanner;
