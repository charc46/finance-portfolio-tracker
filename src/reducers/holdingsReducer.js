export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_HOLDINGS':
      return {...state, holdings: action.payload};
    default:
      return state;
  }
}