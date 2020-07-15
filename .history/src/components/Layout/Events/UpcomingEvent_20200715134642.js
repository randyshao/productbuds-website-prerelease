import React from 'react';
import EventBanner from '../../../assets/images/projectjam.jpg'

const UpcomingEvent = () => {
    return (
        <div className='UpcomingEvent'>
            <h1>Event Title</h1>
            <h2>John Smith, APM @ Google</h2>
            <h3>Saturday June 6th, 2020 at 4pm</h3>
            <h4><a href="randyshao.com">Click here to register!</a></h4>
            <img src={EventBanner} />
        </div>
    )
}

export default UpcomingEvent;