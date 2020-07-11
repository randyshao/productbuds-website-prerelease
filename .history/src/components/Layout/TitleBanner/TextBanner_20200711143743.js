import React from 'react';
import '../../../App.css';

const TextBanner = () => {
    return (
        <div className='TextBanner'>
            <p className='SmallHeader'><strong>The Product Buds Mission</strong></p>
            <h1 className='BannerHeadline'>{props.children}</h1>
        </div>
    )
}

export default TextBanner;