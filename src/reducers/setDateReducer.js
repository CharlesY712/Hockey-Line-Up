export const setDateReducer = (state = new Date().toJSON().slice(0, 10), action) => {
  switch (action.type) {
  case 'SET_DATE':
    return action.date;
  default:
    return state;
  }
};