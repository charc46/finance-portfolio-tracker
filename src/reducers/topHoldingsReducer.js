export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_TOP_HOLDINGS':
      return [...state, action.payload];
    default:
      return state;
  }
}