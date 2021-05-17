import React from 'react';

import Banner from '../../components/banner';
import SubHeader from '../../components/subheader';
import ProjectLayout from '../../components/project_layout'


const HomePage = () => {
  return (
    <>
      <Banner />
      <SubHeader header="Projects" />
      <ProjectLayout />
      <Banner></Banner>

      <Banner></Banner>
      <Banner></Banner>

    </>
  );
}

export default HomePage;