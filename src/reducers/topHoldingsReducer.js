export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_TOP_HOLDINGS':
      return action.payload;
    default:
      return state;
  }
}