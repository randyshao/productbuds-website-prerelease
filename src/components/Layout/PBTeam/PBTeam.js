import React from 'react';
import ProfileContainer from './ProfilesContainer';
import AdvisorContainer from './AdvisorContainer';

const PBTeam = () => {
  return (
    <div class='PBTeam MainContent'>
      <h1 class='PBTeam'>Meet the Product Buds Team</h1>
      <ProfileContainer />
      <h1 class='PBTeam'>Meet our Amazing Advisors</h1>
      <AdvisorContainer />
    </div>
  );
};

export default PBTeam;
