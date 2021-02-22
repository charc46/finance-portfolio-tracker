import { combineReducers } from 'redux'
import topHoldingsReducer from './topHoldingsReducer'
import holdingsReducer from './holdingsReducer'
import groupedHoldingsReducer from './groupedHoldingsReducer'

export default combineReducers({
  topHoldings: topHoldingsReducer,
  holdings: holdingsReducer,
  groupedHoldings: groupedHoldingsReducer
})