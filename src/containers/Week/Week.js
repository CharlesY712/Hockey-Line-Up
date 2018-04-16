import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Game from '../../components/Game/Game';
import * as actions from '../../actions';
import { fetchSeason } from '../../helpers/apiCalls';

class Week extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    if (this.props.date.includes('W')) {
      this.getWeekDays();
    //   this.getSchedule();
    //   const gameChildren = this.displayGames();
    //   this.setState({games: gameChildren});
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      if (this.props.date.includes('W')) {
        this.getWeekDays();
        //     this.getSchedule();
        //     const gameChildren = this.displayGames();
        //     this.setState({games: gameChildren});
      }
    }
  }

  getDateOfISOWeek(year, week) {
    const simple = new Date(year, 0, 1 + (week - 1) * 7);
    const dow = simple.getDay();
    const ISOweekStart = simple;
    if (dow <= 4) {
      ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    } else {
      ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    }
    return ISOweekStart.toISOString().slice(0, 10);
  }

  getWeekDays() {
    const year = this.props.date.slice(0, 4);
    const week = this.props.date.slice(6, 8);
    const date = this.getDateOfISOWeek(year, week);
    for (let index = 0; index < 1; index++) {
      let myDate = new Date(date);
      myDate.setDate(myDate.getDate() + index);
      let nextDay = myDate.toISOString().slice(0, 10);
      this.getSchedule(nextDay);
    }
  }

  async getSchedule(date){
    const games = await fetchSeason(date);
    const gameSchedule = games.dailygameschedule.gameentry;
    this.props.addSchedule(gameSchedule);
    // const gameComponents = this.displayGames(gameSchedule);
    // this.setState({games: gameComponents});
  }

  displayGames() {
    const mappedGames = this.props.schedule.map(schedule => {
      return <Game
        key={schedule.id}
        homeTeamCity={schedule.homeTeam.City}
        homeTeamName={schedule.homeTeam.Name}
        awayTeamCity={schedule.awayTeam.City}
        awayTeamName={schedule.awayTeam.Name}
        time={schedule.time}
      />;
    });
    return mappedGames;
  }
  
  render() {
    if (this.props.date.includes('W')) {
      return (
        <section>
          <div className="directions">Please select a week in the box above.</div>
          <h1 className="date">{this.props.date}</h1>
          {this.state.games}
        </section>
      );
    } else {
      return (
        <section>
          <div className="directions">Please select a week in the box above.</div>
        </section>
      );
    }
  }
}

Week.propTypes = {
  addSchedule: PropTypes.func,
  addScoreboard: PropTypes.func,
  date: PropTypes.string,
  setDate: PropTypes.func,
  schedule: PropTypes.array
};

export const mapStateToProps = state => ({
  date: state.setDate,
  schedule: state.schedule
});

export const mapDispatchToProps = dispatch => ({
  addSchedule: (season) => dispatch(actions.addSchedule(season)),
  setDate: (date) => dispatch(actions.setDate(date))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Week));
