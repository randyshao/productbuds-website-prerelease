import React from 'react';
import Auxiliary from '../hoc/Auxiliary';
import CentredBanner from '../components/Layout/TitleBanner/CentredBanner';
import PeopleContainers from '../components/Layout/PeopleContainers/PeopleContainers';
import ProjectJamDescription from '../components/Layout/ImageTextBox/ProjectJamDescription';
import Finalists from '../components/Layout/DemoDay/Finalists';
import DemoDay from '../components/Layout/DemoDay/DemoDay';

const ProjectJam = () => {
  return (
    <Auxiliary>
      <CentredBanner />
      <ProjectJamDescription />
      <DemoDay />
      <PeopleContainers />
    </Auxiliary>
  );
};

export default ProjectJam;
