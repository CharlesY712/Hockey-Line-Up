export const setSeasonTypeReducer = (state = "-playoff", action) => {
  switch (action.type) {
  case 'SET_TYPE':
    return action.style;
  default:
    return state;
  }
};