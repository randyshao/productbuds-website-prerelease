import React, { useState } from 'react';
import Profile from './Profile';
import Auxiliary from '../../../hoc/Auxiliary';
import Jonathan from '../../../assets/images/team/jonathan.jpg';
import Clement from '../../../assets/images/team/clement.png';
import Jerry from '../../../assets/images/team/jerry.jpg';

const ProfilesContainer = () => {
  const advisorMember = [
    {
      name: 'Jonathan Javier',
      headshot: Jonathan,
      linkedin: 'https://www.linkedin.com/in/jonathanmjavier/',
      bio:
        'Jonathan Javier is currently the CEO and Founder of Wonsulting. The mission of Wonsulting is to “turn underdogs into winners” by helping those who come from non-target schools/non-traditional backgrounds get into their dream careers. Jonathan has also worked on the Strategy and Operations team at Snap, Google, and Cisco and has led 125+ workshops in 8 different countries.',
    },
    {
      name: 'Clement Kao',
      headshot: Clement,
      linkedin: 'https://www.linkedin.com/in/clement-kao/',
      bio:
        'Clement Kao is a Product Manager at Blend, a San Francisco-based startup that partners with lenders and technology providers to re-imagine consumer finance. He founded Product Manager HQ (PMHQ), where he’s published 50+ best practice articles, provides advice in the PMHQ Slack community (6,800+ members), and curates the PMHQ newsletter (23,000+ subscribers).',
    },
    {
      name: 'Jerry Lee',
      headshot: Jerry,
      linkedin: 'https://www.linkedin.com/in/jehakjerrylee/',
      bio:
        'Jerry Lee is currently a Senior Strategy & Operations Manager at Google. He is from Torrance, California and graduated summa cum laude from Babson College. After graduating, Jerry was hired as the youngest analyst in his organization by being promoted multiple times in 2 years to his current position. Outside of work, Jerry partners with universities & organizations (100+ to date) to help others land into their dream careers. He has amassed 50,000+ followers and has reached 15M+ professionals.',
    },
  ];

  return (
    <Auxiliary>
      <div className='ProfilesContainer'>
        {advisorMember.map((detail) => (
          <Profile
            key={detail.linkedin}
            name={detail.name}
            headshot={detail.headshot}
            linkedin={detail.linkedin}
            bio={detail.bio}
          />
        ))}
      </div>
    </Auxiliary>
  );
};

export default ProfilesContainer;
