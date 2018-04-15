const weekCleaner = (season, firstDay, lastDay) => {
  const games = season.reduce((gamesDuringWeek, game) => {
    if (game.date >= firstDay && game.date <= lastDay) {
      // not going to work with strings
      // parse, evaluate, stringify?
      // new date('11')
      gamesDuringWeek.push(game);
    }
    return gamesDuringWeek;
  }, []);
  return games;
};

export default weekCleaner;