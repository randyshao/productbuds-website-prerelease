import React from 'react';
import SocialsLinks from './SocialsLinks';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='Footer MainContent'>
                <p className='FooterText'>Made with <span>💚</span> by the Product Buds team</p>
                <SocialsLinks />
            </div>
        </footer>
    )
}

export default Footer;