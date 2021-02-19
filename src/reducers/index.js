import { combineReducers } from 'redux'
import topHoldingsReducer from './topHoldingsReducer'
import holdingsReducer from './holdingsReducer'

export default combineReducers({
  topHoldings: topHoldingsReducer,
  holdings: holdingsReducer
})