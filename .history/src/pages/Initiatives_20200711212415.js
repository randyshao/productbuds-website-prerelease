import React from 'react';
import Auxiliary from '../hoc/Auxiliary'
import TextBanner from '../components/Layout/TitleBanner/TextBanner'
import Initiative from '../components/Layout/ImageTextBox/Initiative/Initiative'

const Initiatives = () => {
    return (
        <Auxiliary>
            <div className='MainContent'>
                <TextBanner smallHeader='Our Initiatives'>We give our community the resources they need to break into product management.</TextBanner>
            </div>
            <Initiative title='Project Jam'>The Product Buds Project Jam enables you to work on collaborative projects, immerse you in the product development process, 
                and allows you to enhance your project portfolio! Whether you're an aspiring Product Manager (PM) who just stumbled 
                on this field recently or a current PM who's well-versed in many areas of Product, this opportunity will allow you to sharpen 
                core business, technical, teamwork, and interpersonal with others in the community! 😇</Initiative>
            <Initiative />
        </Auxiliary>
    )
}

export default Initiatives; 