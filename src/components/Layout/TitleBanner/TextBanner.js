import React from 'react';
import '../../../App.css';

const TextBanner = (props) => {
    return (
        <div className='TextBanner'>
            <p className='SmallHeader'><strong>{props.smallHeader}</strong></p>
            <h1 className='BannerHeadline'>{props.children}</h1>
        </div>
    )
}

export default TextBanner;