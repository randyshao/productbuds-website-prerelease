import React from 'react';
import EventBanner from '../../../assets/images/currentevent.JPG'
import ButtonPill from '../../UI/ButtonPill'

const UpcomingEvent = () => {
    return (
        <div className='UpcomingEvent'>
            <h1>Our Upcoming Event!</h1>
            <div className='EventBlock'>
                <div>
                    <h1>Resume Review Workshop</h1>
                    <h2></h2>
                    <h3>Saturday July 25th, 4-5PM PST</h3>
                    <ButtonPill link='https://zmurl.com/pb-pm-resume-review'>Click here to register</ButtonPill>
                </div>
                <div>
                    <img src={EventBanner} />
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvent;