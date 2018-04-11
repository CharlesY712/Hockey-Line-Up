export const selectSeasonReducer = (state = "2016-2017-regular", action) => {
  switch (action.type) {
  case 'SELECT_SEASON':
    return action.season;
  default:
    return state;
  }
};