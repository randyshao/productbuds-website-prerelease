import React from 'react';
import IntroImage from '../../../assets/images/companyintro-image.svg';
import ButtonPill from '../../UI/ButtonPill';

const CompanyIntro = () => {
    return (
        <div className='CompanyIntroBackground'>
            <div className='CompanyIntro MainContent'>
                <div className='AboutPB'>
                    <h1>What is Product Buds?</h1>
                    <p> 
                        Product Buds (PB) is a community where budding product managers sprout, 
                        grow, and flourish. We maintain a diverse, inclusive, and welcoming environment 
                        for aspiring Product Managers of all social identities, cultural identities, 
                        and career backgrounds. In PB, members share Product Management (PM) knowledge, 
                        make meaningful connections, and grow in their goals together.
                    </p>
                    <ButtonPill link='/about'>Meet the Team</ButtonPill>
                </div>
                <img className='IntroImage' src={IntroImage} alt="Product Buds Logo"/>
            </div>
        </div>
    )
}

export default CompanyIntro;