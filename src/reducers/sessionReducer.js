const initialState = {
  user: null,
  loggedInStatus: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CHECK_LOGIN_STATUS':
      return { user: action.payload.user, loggedInStatus: action.payload.logged_in }
    case 'SIGN_IN':
      return { user: action.payload.user, loggedInStatus: action.payload.logged_in }
    case 'SIGN_OUT':
      return { user: null, loggedInStatus: action.payload.logged_in }
    default: 
      return state
  }
}