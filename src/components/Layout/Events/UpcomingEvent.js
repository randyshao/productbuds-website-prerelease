import React from 'react';
import EventBanner from '../../../assets/images/projectjam.jpg'

const UpcomingEvent = () => {
    return (
        <div className='UpcomingEvent'>
            <h1>Our Upcoming Event!</h1>
            <div className='EventBlock'>
                <div>
                    <h1>Ask a Product Bud</h1>
                    <h2>John Smith, APM @ Google</h2>
                    <h3>Saturday June 6th, 2020 at 4pm</h3>
                    <h4><a href="https://randyshao.com">Click here to register!</a></h4>
                </div>
                <div>
                    <img src={EventBanner} />
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvent;