import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavButtons.css';
import * as icon from '../../images/icons/';

const NavButtons = () => {

  return (
    <div className="nav-buttons">
      <NavLink to="/" exact className="home button">
        <img className="icon" alt="home-icon" src={icon.home}/>Home
      </NavLink>    
      <NavLink to="/day" className="day button">
        <img className="icon" alt="day-icon" src={icon.day}/>Day
      </NavLink>
      <NavLink to="/week" className="week button">
        <img className="icon" alt="week-icon" src={icon.week}/>Week
      </NavLink>
      <NavLink to="/month" className="month button">
        <img className="icon" alt="month-icon" src={icon.month}/>Month
      </NavLink>
    </div>
  );
};

export default NavButtons;
