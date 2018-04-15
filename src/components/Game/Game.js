import React from 'react';
import PropTypes from 'prop-types';

const Game = ({homeTeamCity, homeTeamName, awayTeamCity, awayTeamName}) => {
  return (
    <article className="game-box">
      <h1>{homeTeamCity} {homeTeamName}</h1>
      <span>vs</span>
      <h1>{awayTeamCity} {awayTeamName}</h1>
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