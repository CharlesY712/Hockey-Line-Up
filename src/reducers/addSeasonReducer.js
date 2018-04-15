export const addSeasonReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_SEASON':
    return action.season;
  default:
    return state;
  }
};