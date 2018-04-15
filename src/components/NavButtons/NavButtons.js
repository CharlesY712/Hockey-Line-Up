import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavButtons.css';
import * as icon from '../../images/icons/';

const NavButtons = () => {

  return (
    <div className="nav-buttons">
      <NavLink to="/" className="home button">
        <img alt="home-icon" src={icon.home}/>Home
      </NavLink>    
      <NavLink to="/day" className="day button">
        <img alt="day-icon" src={icon.day}/>Day
      </NavLink>
      <NavLink to="/week" className="week button">
        <img alt="week-icon" src={icon.week}/>Week
      </NavLink>
      <NavLink to="/month" className="month button">
        <img alt="month-icon" src={icon.month}/>Month
      </NavLink>
    </div>
  );
};

export default (NavButtons);
