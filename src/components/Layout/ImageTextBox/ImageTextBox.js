import React from 'react';
import PBLogo from '../../../assets/images/drop-logo.svg';

const ImageTextBox = () => {
    return (
        <div className='ImageTextBoxDisplay'>
            <div className='ImageTextBox'>
                <div className='TextContainer'>
                    <h1>We bring budding product managers together.</h1>
                    <p>Whether you are a student, working professional, or self-employed individual who is new to the world of Product Management (PM) or you are well-versed, we welcome you to use our diverse, inclusive, 
                        welcoming community as a platform to advance your PM knowledge and skills through our PM Book Club, case studies discussions, collaborative Project Jam, 1:1 Mock Interviews, and ongoing community 
                        events and workshops.
                    </p>
                </div>
                <img className='TextImage' src={PBLogo} />
            </div>
        </div>
        
    )
}

export default ImageTextBox;