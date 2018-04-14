const dayCleaner = (season, day) => {
  const games = season.reduce((gamesOnDay, game) => {
    if (game.date === day) {
      gamesOnDay = [game, ...game];
    }
    return gamesOnDay;
  }, []);
  return games;
};

export default dayCleaner;