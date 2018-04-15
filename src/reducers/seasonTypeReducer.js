export const seasonTypeReducer = (state = "-playoff", action) => {
  switch (action.type) {
  case 'SELECT_TYPE':
    return action.style;
  default:
    return state;
  }
};