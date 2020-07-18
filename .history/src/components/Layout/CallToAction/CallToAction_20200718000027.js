import React from 'react';
import ButtonPill from '../../UI/ButtonPill';

const CallToAction = () => {
    return (
        <div className='CallToAction'>
            <div className='CTABox'>
                <h2>Become a part of the Product Buds Slack group.</h2>
                <ButtonPill link='bit.ly/joinproductbuds'>Join Our Community</ButtonPill>
            </div>
            <div className='CTABox'>
                <h2>Become a sponsor and support the Product Buds journey.</h2>
                <ButtonPill link='bit.ly/joinproductbuds'>Become A Sponsor.</ButtonPill>
            </div>
        </div>
    )
}

export default CallToAction;