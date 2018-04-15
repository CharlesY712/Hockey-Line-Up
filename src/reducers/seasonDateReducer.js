export const seasonDateReducer = (state = "2017-2018", action) => {
  switch (action.type) {
  case 'SELECT_SEASON':
    return action.date;
  default:
    return state;
  }
};