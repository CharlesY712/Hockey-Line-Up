export const selectSeasonReducer = (state = "2017-2018-regular", action) => {
  switch (action.type) {
  case 'SELECT_SEASON':
    return action.season;
  default:
    return state;
  }
};