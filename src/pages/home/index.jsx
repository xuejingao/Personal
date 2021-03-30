import React from 'react';

import Banner from '../../components/banner';
import SubHeader from '../../components/subheader';


const HomePage = () => {
  return (
    <>
      <Banner />
      <SubHeader header="Projects"></SubHeader>
      <Banner></Banner>

      <Banner></Banner>
      <Banner></Banner>

    </>
  );
}

export default HomePage;