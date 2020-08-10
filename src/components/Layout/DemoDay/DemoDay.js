import React from 'react';
import ButtonPill from '../../UI/ButtonPill';

const DemoDay = () => {
  return (
    <div className='DemoDay MainContent'>
      <h1 style={{ color: '#307f1a' }}>Demo Day</h1>
      <h3>Saturday August 15th @ 9:30-11:30am PST</h3>
      <p style={{ padding: '30px 20px' }}>
        Join us for the first Product Buds Project Jam Demo Day, sponsored by
        Cognity Labs, RocketBlocks, NoDegree, and Wonsulting! On Demo Day, our
        TOP 7 Project Jam teams will pitch products they've been on working on
        all summer to our star-studded panel of judges. Additionally, we’ve
        partnered with Wonsulting to send your resume to recruiters at Facebook,
        Google, Lyft, Cisco, Microsoft, Uber, and more! Please include your
        resume while signing up to be considered. You must attend Demo Day for
        your resume to be sent.
      </p>
      <ButtonPill link='https://zmurl.com/pbpjdemoday'>
        Click here to register
      </ButtonPill>
    </div>
  );
};

export default DemoDay;
