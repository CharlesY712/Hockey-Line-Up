const dayCleaner = (gameArray, day) => {
  if (day === new Date().toJSON().slice(0, 10)) {
    const games = gameArray.reduce((gamesOnDay, game) => {
      if (game.date === day) {
        gamesOnDay = [...gamesOnDay, game];
      }
      return gamesOnDay;
    }, []);
    return games;
  } else {
    const games = gameArray.reduce((gamesOnDay, game) => {
      if (game.game.date === day) {
        gamesOnDay = [...gamesOnDay, game];
      }
      return gamesOnDay;
    }, []);
    return games;
  }
};

export default dayCleaner;