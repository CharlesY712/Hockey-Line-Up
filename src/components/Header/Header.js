import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './Header.css';
import { fetchSeason, fetchScoreboard } from '../../helpers/apiCalls';

class Header extends Component {

  async componentDidMount() {
    const fullSeason = await fetchSeason();
    const seasonGames = fullSeason.fullgameschedule.gameentry;
    this.props.addSeason(seasonGames);
  }
  
  determineSelectBox() {
    if (this.props.location.pathname === '/day') {
      return (<input 
        type="date" 
        name="day" 
        className="dateSelector" 
        id="date"
        onChange={event => this.props.setDate(event.target.value)}
      />);
    } else if (this.props.location.pathname === '/week') {
      return (<input 
        type="week" 
        name="week" 
        className="dateSelector" 
        id="week"
        onChange={event => this.props.setDate(event.target.value)}
      />);
    } else if (this.props.location.pathname === '/month') {
      return (<input 
        type="month" 
        name="month"  
        className="dateSelector" 
        id="month"
        onChange={event => this.props.setDate(event.target.value)}
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
          {this.determineSelectBox()}
          <div>Season: 
            <select 
              className="season-date"
              onChange={event => this.props.setSeasonYear(event.target.value)}>
              <option value="2017-2018">2017-2018</option>
              <option value="2016-2017">2016-2017</option>
              <option value="2015-2016">2015-2016</option>
              <option value="2014-2015">2014-2015</option>
              <option value="2013-2014">2013-2014</option>
              <option value="2012-2013">2012-2013</option>
              <option value="2011-2012">2011-2012</option>
              <option value="2010-2011">2010-2011</option>
              <option value="2009-2010">2009-2010</option>
              <option value="2008-2009">2008-2009</option>
              <option value="2007-2008">2007-2008</option>
            </select>
            <select
              className="season-type"
              onChange={event => this.props.setSeasonType(event.target.value)}>
              <option value="-playoff">Playoff</option>
              <option value="-regular">Regular</option>
            </select>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  addSeason: PropTypes.func,
  setDate: PropTypes.func,
  setSeasonYear: PropTypes.func,
  setSeasonType: PropTypes.func,
  location: PropTypes.object
};

export const mapDispatchToProps = dispatch => ({
  addSeason: (season) => dispatch(actions.addSeason(season)),
  setDate: (date) => dispatch(actions.setDate(date)),
  setSeasonYear: (year) => dispatch(actions.setSeasonYear(year)),
  setSeasonType: (type) => dispatch(actions.setSeasonType(type))
});

export default withRouter(connect(null, mapDispatchToProps)(Header));
