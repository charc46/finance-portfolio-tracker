const initialState = {
  allHoldings: [],
  stockHoldings: [],
  iexData: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_HOLDINGS':
      return { ...state, allHoldings: action.payload };
    case 'FETCH_STOCK_HOLDINGS':
      return { ...state, stockHoldings: action.payload };
    case 'FETCH_IEX_STOCK_DATA':
      return { ...state, iexData: action.payload };
    default:
      return state;
  }
}