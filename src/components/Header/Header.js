import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './Header.css';
import { fetchSeason, fetchScoreboard } from '../../helpers/apiCalls';

class Header extends Component {

  componentDidMount() {
    const selectedDate = parseInt(this.props.date.split('-').join(''));
    const todaysDate = parseInt(new Date().toJSON().slice(0, 10).split('-').join(''));
    if (selectedDate >= todaysDate) {
      this.getSchedule();
    } else {
      this.getScoreboard();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const selectedDate = parseInt(this.props.date.split('-').join(''));
      const todaysDate = parseInt(new Date().toJSON().slice(0, 10).split('-').join(''));      
      if (selectedDate >= todaysDate) {
        this.getSchedule();
      } else {
        this.getScoreboard();
      }
    }
  }
  
  async getSchedule(){
    const date = this.props.date;
    const games = await fetchSeason(date);
    const gameSchedule = games.dailygameschedule.gameentry;
    this.props.addSchedule(gameSchedule);
  }

  async getScoreboard(){    
    const date = this.props.date;
    const scoreboard = await fetchScoreboard(date);
    const gamescores = scoreboard.scoreboard.gameScore;
    this.props.addScoreboard(gamescores);
  }

  determineSelectBox() {
    if (this.props.location.pathname === '/day') {
      return (<input 
        type="date" 
        name="day" 
        className="dateSelector" 
        id="date"
        min="2017-10-04"
        onChange={event => this.props.setDate(event.target.value)}
      />);
    } else if (this.props.location.pathname === '/week') {
      return (<input 
        type="week" 
        name="week" 
        className="dateSelector" 
        id="week"
        min="2017-10-04"
        onChange={event => this.props.setDate(event.target.value)}
      />);
    } else if (this.props.location.pathname === '/month') {
      return (<input 
        type="month" 
        name="month"  
        className="dateSelector" 
        id="month"
        min="2017-10"
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
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  addSchedule: PropTypes.func,
  addScoreboard: PropTypes.func,
  setDate: PropTypes.func,
  date: PropTypes.string,
  location: PropTypes.object
};

export const mapStateToProps = state => ({
  date: state.setDate
});

export const mapDispatchToProps = dispatch => ({
  addSchedule: (season) => dispatch(actions.addSchedule(season)),
  addScoreboard: (season) => dispatch(actions.addScoreboard(season)),
  setDate: (date) => dispatch(actions.setDate(date)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
