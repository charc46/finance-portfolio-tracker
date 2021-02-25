import { combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import holdingsReducer from './holdingsReducer'

export default combineReducers({
  allHoldings: holdingsReducer,
  currentUser: sessionReducer
})