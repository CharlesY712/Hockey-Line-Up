const dayCleaner = (season, firstDay, lastDay) => {
  const games = season.reduce((gamesDuringWeek, game) => {
    if (game.date >= firstDay && game.date <= lastDay) {
      // not going to work with strings
      // parse, evaluate, stringify?
      gamesDuringWeek.push(game);
    }
    return gamesDuringWeek;
  }, []);
  return games;
};

export default dayCleaner;