const dayCleaner = (season, day) => {
  const games = season.reduce((gamesOnDay, game) => {
    if (game.date === day) {
      gamesOnDay = [...gamesOnDay, game];
    }
    return gamesOnDay;
  }, []);
  return games;
};

export default dayCleaner;