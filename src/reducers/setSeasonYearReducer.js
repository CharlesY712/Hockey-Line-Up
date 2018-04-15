export const setSeasonYearReducer = (state = "2017-2018", action) => {
  switch (action.type) {
  case 'SET_YEAR':
    return action.year;
  default:
    return state;
  }
};