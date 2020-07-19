import React from 'react';
import AboutImage from '../../../assets/images/aboutsection-image.svg';

const ImageTextBox = () => {
    return (
        <div className='ImageTextBoxBackground'>
            <div className='MainContent'>
                <div className='ImageTextBox'>
                    <div className='TextContainer'>
                        <h1>We offer aspiring PMs the support they need to succeed.</h1>
                        <p> At Product Buds, we believe that digitial communities are unique and valuable
                            in that they bring people all over the world together.
                            We not only provide aspring PMs and space to ask learn togeher and find guidance, 
                            but through outreach and partnerships, we empower our community members with access
                            to a network that will help them pursue a brighter future. 
                            We're obsessively passionate about bringing product people together
                            and excited to see how we can provide education, community, and opportunity for many.
                        </p>
                        <h2> Our Community Values </h2>
                        <div className='valuesContainer'>
                            <div className="TextContainer">
                                <img className='TextImage' src={AboutImage} />
                                <h3> Diversity & Inclusion </h3>
                            </div>
                            <div className="TextContainer">
                                <img className='TextImage' src={AboutImage} />
                                <h3> Sustainable Growth </h3>
                            </div>
                            <div className="TextContainer">
                                <img className='TextImage' src={AboutImage} />
                                <h3> Shared Empowerment </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ImageTextBox;