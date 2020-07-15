import React from 'react';
import '../../../App.css';

const TextBanner = (props) => {
    return (
        <div className='TextBanner'>
            <div className='TextBanner MainContent'>
                <p className='SmallHeader'><strong>{props.smallHeader}</strong></p>
                <h1 className='BannerHeadline'>{props.children}</h1>
            </div>
        </div>
    )
}

export default TextBanner;