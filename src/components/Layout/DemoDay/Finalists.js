import React from 'react';
import Finalist from './Finalist';

const Finalists = () => {
  const finalists = [
    {
      Company: 'Boomerang',
      Description:
        'Provide growth opportunities to companies and job candidates through simple, enlightening feedback.',
    },
    {
      Company: 'Tecto',
      Description:
        'We built a platform to connect peers that want to rent out equipment such as cameras, drones, and DJ controllers.',
    },
    {
      Company: 'News Buds',
      Description:
        'Stay informed and engage in civil conversations on current events.',
    },
    {
      Company: 'Panda Box',
      Description:
        "Pandora's Box for First-Gen students, taking the leg work out of researching for school",
    },
    {
      Company: 'Helpmates',
      Description:
        'Helpmates scores your well-being based on in-app assessments and gives you a plethora of resources to improve your score.',
    },
    {
      Company: 'Cumulus',
      Description:
        'Cumulus aims to help underrepresented minorities in high school explore the limitless opportunities in higher education.',
    },
    {
      Company: 'Wander',
      Description:
        'Wander is a platform where travelers can easily explore, share, and plan their trips.',
    },
  ];
  return (
    <div className='MainContent'>
      <div className='Finalists'>
        <h1>Our Demo Day Finalists</h1>
        <div
          style={{ justifyContent: 'space-around' }}
          className='ProfilesContainer'
        >
          {finalists.map((detail) => (
            <Finalist
              company={detail.Company}
              description={detail.Description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Finalists;
