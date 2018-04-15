export const addScoreboardReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_SCOREBOARD':
    return action.scoreboard;
  default:
    return state;
  }
};