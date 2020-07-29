import React from 'react';
import EventBanner from '../../../assets/images/currentevent.png';
import ButtonPill from '../../UI/ButtonPill';

const UpcomingEvent = () => {
  return (
    <div className='UpcomingEvent'>
      <h1>Our Upcoming Event!</h1>
      <div className='EventBlock'>
        <div>
          <h1>Case Studies Workshop</h1>
          <h2></h2>
          <h3>Saturday August 1st, 11AM PST</h3>
          <ButtonPill link='https://zmurl.com/case-studies'>
            Click here to register
          </ButtonPill>
        </div>
        <div className='EventBanner'>
          <img src={EventBanner} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
