export const addScheduleReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_SCHEDULE':
    return action.schedule;
  default:
    return state;
  }
};