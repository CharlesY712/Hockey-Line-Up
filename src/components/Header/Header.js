import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <select> 
        <option value="2016-2017-regular">2016-2017</option>
        <option value="2015-2016-regular">2015-2016</option>
        <option value="2014-2015-regular">2014-2015</option>
        <option value="2013-2014-regular">2013-2014</option>
        <option value="2012-2013-regular">2012-2013</option>
        <option value="2011-2012-regular">2011-2012</option>
        <option value="2010-2011-regular">2010-2011</option>
        <option value="2009-2010-regular">2009-2010</option>
        <option value="2008-2009-regular">2008-2009</option>
        <option value="2007-2008-regular">2007-2008</option>
      </select>
      <h1 className="App-title">Hockey-Line-Up</h1>
      <NavLink to="/day">DAY</NavLink>
      <NavLink to="/week">WEEK</NavLink>
      <NavLink to="/month">MONTH</NavLink>
    </header>
  );
};

export default Header;
// export const mapDispatchToProps = dispatch => ({
//   selectSeason: () => dispatch(actions.selectSeason())
// });

// export default withRouter(connect(null, mapDispatchToProps)(Header));



