import React from 'react';
import Person from './Person';
import Sponsor from './Sponsor';
import Jonathan from '../../../assets/images/team/jonathan.jpg';
import Clement from '../../../assets/images/team/clement.png';
import Jerry from '../../../assets/images/team/jerry.jpg';
import Kenton from '../../../assets/images/headshot/kenton.jpg';
import Christine from '../../../assets/images/headshot/christine.jpg';
import Kartik from '../../../assets/images/headshot/kartik.jpg';
import Jon from '../../../assets/images/headshot/jon.jpg';
import Emma from '../../../assets/images/headshot/emma.jpg';
import Cheryl from '../../../assets/images/headshot/cheryl.jpg';
import Wonsulting from '../../../assets/images/logos/wonsulting.png';
import RocketBlocks from '../../../assets/images/logos/rocketblocks.png';
import NoDegree from '../../../assets/images/logos/nodegree.jpg';
import CognityLabs from '../../../assets/images/logos/cognitylabs.png';
import Auxiliary from '../../../hoc/Auxiliary';

const PeopleContainers = (props) => {
  const speakerList = [
    {
      name: 'Jonathan Javier',
      headshot: Jonathan,
      role: 'Co-Founder and CEO @ Wonsulting',
    },
    {
      name: 'Clement Kao',
      headshot: Clement,
      role: 'Co-Founder @ PM HQ',
    },
    {
      name: 'Jerry Lee',
      headshot: Jerry,
      role: 'COO @ Wonsulting',
    },
  ];

  const judgeList = [
    {
      name: 'Kenton Kivestu',
      headshot: Kenton,
      role: 'Founder and CEO @ RocketBlocks',
    },
    {
      name: 'Christine Cho',
      headshot: Christine,
      role: 'Product Manager @ Linkedin',
    },
    {
      name: 'Emma Albert',
      headshot: Emma,
      role: 'Sr. Product Manager @ Workday',
    },
    {
      name: 'Kartik Sundar',
      headshot: Kartik,
      role: 'Director of Product @ Salesforce',
    },
    {
      name: 'Jon Morgan',
      headshot: Jon,
      role: 'Product Manager @ Google',
    },
    {
      name: 'Cheryl Kwan',
      headshot: Cheryl,
      role: 'Product Manager @ PlayStation',
    },
  ];

  const sponsorList = [
    {
      logo: Wonsulting,
      company: 'Wonsulting',
    },
    {
      logo: RocketBlocks,
      company: 'Wonsulting',
    },
    {
      logo: NoDegree,
      company: 'Wonsulting',
    },
    {
      logo: CognityLabs,
      company: 'Wonsulting',
    },
  ];

  return (
    <Auxiliary>
      <div className='MainContent'>
        <h2 className='Block'>Speakers</h2>
        <div className='ProfilesContainer'>
          {speakerList.map((detail) => (
            <Person
              name={detail.name}
              role={detail.role}
              headshot={detail.headshot}
            />
          ))}
        </div>
        <h2 style={{ paddingTop: '40px' }} className='Block'>
          Judges
        </h2>
        <div className='ProfilesContainer'>
          {judgeList.map((detail) => (
            <Person
              name={detail.name}
              role={detail.role}
              headshot={detail.headshot}
            />
          ))}
        </div>
        <h2 style={{ paddingTop: '40px' }} className='Block'>
          Sponsors
        </h2>
        <div className='ProfilesContainer'>
          {sponsorList.map((detail) => (
            <Sponsor logo={detail.logo} company={detail.company} />
          ))}
        </div>
      </div>
    </Auxiliary>
  );
};

export default PeopleContainers;
