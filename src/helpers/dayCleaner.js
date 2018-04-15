const dayCleaner = (scoreboard, day) => {
  const games = scoreboard.reduce((gamesOnDay, game) => {
    if (game.game.date === day) {
      gamesOnDay = [...gamesOnDay, game];
    }
    return gamesOnDay;
  }, []);
  return games;
};

export default dayCleaner;