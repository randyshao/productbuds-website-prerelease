import React from 'react';
import Auxiliary from '../hoc/Auxiliary'
import TextBanner from '../components/Layout/TitleBanner/TextBanner'

const Initiatives = () => {
    return (
        <Auxiliary>
            <div className='MainContent'>
                <TextBanner smallHeader='Our Initiatives'>We give our community the resources they need to break into product management.</TextBanner>
            </div>
        </Auxiliary>
    )
}

export default Initiatives; 