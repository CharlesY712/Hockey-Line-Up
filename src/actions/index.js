export const addSeason = (season) => ({
  type: 'ADD_SEASON',
  season
});

export const seasonDate = (date) => ({
  type: 'SELECT_SEASON',
  date
});

export const seasonType = (style) => ({
  type: 'SELECT_TYPE',
  style
});
