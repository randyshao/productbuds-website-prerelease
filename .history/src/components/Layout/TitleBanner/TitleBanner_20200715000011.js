import React from 'react';
import BannerImage from '../../../assets/images/titlebanner-image.svg';
import '../../../App.css';

const TitleBanner = () => {
    return (
        <div className=''>
            <div className='TitleBanner MainContent'>
                <div className='TitleBannerText'>
                    <h1 className='BannerMain'>A community where budding <span style={{color: '#5AD535'}}>product managers</span> flourish.</h1>
                    <h3 className='Tagline'>sprout. grow. flourish.</h3>
                </div>
                <img className='BannerImage' src={BannerImage} alt="Product Buds Logo"/>
            </div>
        </div>
    )
}

export default TitleBanner;
