import React from 'react';
import ButtonPill from '../../UI/ButtonPill';

const CallToAction = () => {
    return (
        <div className='CallToAction'>
            <div className='CTABox'>
                <h2>Become a part of the Product Buds Slack community.</h2>
                <div>
                    <ButtonPill link='http://bit.ly/joinproductbuds'>Join Our Community</ButtonPill>
                </div>
            </div>
            <div className='CTABox'>
                <h2>Support the Product Buds mission.</h2>
                <div>
                    <ButtonPill link='https://airtable.com/shr8UL8byOna2YhhW'>Become A Sponsor</ButtonPill>
                </div>
            </div>
        </div>
    )
}

export default CallToAction;