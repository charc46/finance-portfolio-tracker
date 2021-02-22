export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_GROUPED_HOLDINGS':
      return action.payload;
    default:
      return state;
  }
}