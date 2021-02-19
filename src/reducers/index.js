import { combineReducers } from 'redux'
import topHoldingsReducer from './topHoldingsReducer'

export default combineReducers({
  topHoldings: topHoldingsReducer
})