import React from 'react';
import ButtonPill from '../../UI/ButtonPill';

const CallToAction = () => {
    return (
        <div className='CallToAction'>
            <div className='CTABox'>
                <h2>Join the Product Buds Slack Community.</h2>
                <ButtonPill link='http://bit.ly/joinproductbuds'>Join Our Community</ButtonPill>
            </div>
            <div className='CTABox'>
                <h2>Support the Product Buds Mission.</h2>
                <ButtonPill link='https://airtable.com/shr8UL8byOna2YhhW'>Become A Sponsor</ButtonPill>
            </div>
        </div>
    )
}

export default CallToAction;