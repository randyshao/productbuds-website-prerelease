import React from 'react';
import ButtonPill from '../../UI/ButtonPill';

const CentredBanner = () => {
  return (
    <div className='CentredBanner'>
      <h1>Project Jam</h1>
      <h2>Find your team. Ideate. Build. Pitch.</h2>
      <ButtonPill link='https://productbuds.devpost.com/submissions'>
        View Submissions
      </ButtonPill>
    </div>
  );
};

export default CentredBanner;
