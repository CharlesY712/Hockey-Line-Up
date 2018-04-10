import React from 'react';
import PropTypes from 'prop-types';

const Game = ({homeTeamCity, homeTeamName}) => {
  return (
    <article>
      <h1>{homeTeamCity} {homeTeamName}</h1>
    </article>
  );
};

Game.propTypes = {
  homeTeamCity: PropTypes.string,
  homeTeamName: PropTypes.string
}

export default Game;