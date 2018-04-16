import React from 'react';
import './Home.css';
import nhllogo from '../../images/icons/nhl-logo.png';

export const Home = () => {
  
  return (
    <div className="logo-wrapper">
      <img className="logo" src={nhllogo} alt="logo"/>
    </div>
  );

};

export default Home;