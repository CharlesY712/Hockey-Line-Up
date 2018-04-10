const dayCleaner = (season, day) => {
  const games = season.reduce((gamesOnDay, game) => {
    if (game.date === day) {
      gamesOnDay.push(game);
    }
    return gamesOnDay;
  }, []);
  return games;
};

export default dayCleaner;