export default (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_HOLDINGS':
      return {...state, holdings: action.payload};
    case 'FETCH_GROUPED_HOLDINGS':
      return {...state, groupedHoldings: action.payload};
    case 'FETCH_TOTAL_HOLDINGS':
      return {...state, holdingsInfo: action.payload};
    default:
      return state;
  }
}