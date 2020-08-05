import React from 'react';
import StatBox from './StatBox';

const CompanyStats = () => {
  const stats = [
    { number: '2000+', platform: 'members in our Slack community' },
    { number: '3700+', platform: 'followers on Linkedin' },
    { number: '1000+', platform: 'event attendees' },
  ];

  return (
    <div className='CompanyStats'>
      <div className='CompanyStats MainContent'>
        <h2 className='MarginTop'>We launched on May 20th, 2020.</h2>
        <h2>Today we have</h2>
        <div className='StatSection'>
          {stats.map((statistic) => (
            <StatBox number={statistic.number} platform={statistic.platform} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
