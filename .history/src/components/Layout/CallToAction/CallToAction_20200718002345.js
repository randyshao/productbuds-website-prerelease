import React from 'react';
import ButtonPill from '../../UI/ButtonPill';

const CallToAction = () => {
    return (
        <div className='CallToAction'>
            <div className='CTABox'>
                <h2>Become a part of the Product Buds Slack group.</h2>
                <ButtonPill link='http://bit.ly/joinproductbuds'>Join Our Community</ButtonPill>
            </div>
            <div className='CTABox'>
                <h2>Support the journey of Product Buds.</h2>
                <ButtonPill link='https://airtable.com/shr8UL8byOna2YhhW'>Become A Sponsor</ButtonPill>
            </div>
        </div>
    )
}

export default CallToAction;