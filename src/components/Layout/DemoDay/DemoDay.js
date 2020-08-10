import React from 'react';
import ButtonPill from '../../UI/ButtonPill';

const DemoDay = () => {
  return (
    <div className='DemoDay MainContent'>
      <h1 style={{ color: '#307f1a' }}>Demo Day</h1>
      <h3>Saturday August 15th @ 9:30-11:30am PST</h3>
      <p style={{ padding: '30px 20px' }}>
        For our first ever Project Jam Demo Day Cohort, the top 7 finalists will
        be pitching their products in front of a live audience, as well as
        judges and speakers. Interested in checking out what projects are in
        store and attending as an audience member? Click the link below to
        register!
      </p>
      <ButtonPill link='https://zmurl.com/pbpjdemoday'>
        Click here to register
      </ButtonPill>
    </div>
  );
};

export default DemoDay;
