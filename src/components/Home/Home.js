import React from 'react';
import fetchSeason from '../../helpers/apiCalls';

const Home = () => {
  fetchSeason();
  
  return (
    <div>HOME</div>
  );
};

export default Home;