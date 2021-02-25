import axios from 'axios'

export const fetchHoldings = () => {
  return async (dispatch) => {
    const url = 'http://localhost:5000/holdings'
    const response = await axios.get(url, { withCredentials: true })

    dispatch({ type: 'FETCH_HOLDINGS', payload: response.data.allHoldings })
  }
}

export const checkLoginStatus = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:5000/logged_in', { withCredentials: true })

    dispatch({ type: 'CHECK_LOGIN_STATUS', payload: res.data })
  }
}

export const signIn = (email, password) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:5000/login', {
      user: {
        email,
        password
      }},
      { withCredentials: true }
    )

    dispatch({ type: 'SIGN_IN', payload: res.data })
  }
}

export const signOut = () => {
  return async (dispatch) => {
    const res = await axios.delete('http://localhost:5000/logout', { withCredentials: true })

    dispatch({ type: 'SIGN_OUT', payload: res.data.logged_in })
  }
}