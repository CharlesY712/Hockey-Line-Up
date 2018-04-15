import React from 'react';
import PropTypes from 'prop-types';
import './Game.css';

const Game = ({homeTeamCity, homeTeamName, awayTeamCity, awayTeamName, time}) => {
  return (
    <article className="game-box">
      <h1>{awayTeamCity} {awayTeamName} vs {homeTeamCity} {homeTeamName} @ {time}</h1>
    </article>
  );
};

Game.propTypes = {
  homeTeamCity: PropTypes.string,
  homeTeamName: PropTypes.string,
  awayTeamCity: PropTypes.string,
  awayTeamName: PropTypes.string
};

export default Game;