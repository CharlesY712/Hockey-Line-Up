import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Header.css';

const Header = ({selectSeason}) => {

  return (
    <header className="header">
      <h1 className="app-title">HOCKEY LINE-UP</h1>
      SEASON<select onChange={event => selectSeason(event.target.value)}>
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
    </header>
  );
};

export const mapDispatchToProps = dispatch => ({
  selectSeason: (season) => dispatch(actions.selectSeason(season))
});

export default withRouter(connect(null, mapDispatchToProps)(Header));
