import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './Header.css';
import fetchSeason from '../../helpers/apiCalls';

// ({selectSeason, location}) => {

class Header extends Component { 
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log(this.props);
    const fullSeason = await fetchSeason();
    const seasonGames = fullSeason.fullgameschedule.gameentry;
    this.props.addSeason(seasonGames);
  }
  
  determinePath() {
    if (this.props.location.pathname === '/day') {
      return (<input 
        type="date" 
        name="day" 
        className="dateSelector" 
        id="date"
        onChange={event => console.log('day value = ' + event.target.value)}
      />);
    } else if (this.props.location.pathname === '/week') {
      return (<input 
        type="week" 
        name="week" 
        className="dateSelector" 
        id="week"
        onChange={event => console.log('week value = ' + event.target.value)}
      />);
    } else if (this.props.location.pathname === '/month') {
      return (<input 
        type="month" 
        name="month"  
        className="dateSelector" 
        id="month"
        onChange={event => console.log('month value = ' + event.target.value)}
      />);
    } else {
      return null;
    }
  }

  render() {
    return (
      <header className="header">
        <Link to="/" className="app-title">HOCKEY LINE-UP</Link><br/>
        <div className="select-boxes">
          {this.determinePath()}
          <div>Season: 
            <select 
              className="seasonSelect"
              onChange={event => this.props.selectSeason(event.target.value)}>
              <option value="2017-2018-regular">2017-2018</option>
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
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  selectSeason: PropTypes.func,
  location: PropTypes.object
};

export const mapDispatchToProps = dispatch => ({
  addSeason: (season) => dispatch(actions.addSeason(season)),
  selectSeason: (season) => dispatch(actions.selectSeason(season))
});

export default withRouter(connect(null, mapDispatchToProps)(Header));
