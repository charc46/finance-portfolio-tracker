import axios from 'axios'

// Actions for holdings logic

export const addHolding = (name, ticker, price, units, date) => {
  return async (dispatch) => {
    const res = axios.post('http://localhost:5000/holdings', {
        holding: {
          name,
          ticker,
          price,
          units,
          date
        }
    }, { withCredentials: true })

    dispatch({ type: 'ADD_HOLDING', payload: res.data})
  }
}

export const fetchHoldings = () => {
  return async (dispatch) => {
    const url = 'http://localhost:5000/holdings'
    const response = await axios.get(url, { withCredentials: true })

    dispatch({ type: 'FETCH_HOLDINGS', payload: response.data.allHoldings })
  }
}

export const fetchIexStockData = ticker => {
  return async (dispatch) => {
    const res = await axios.get(`https://sandbox.iexapis.com/stable/stock/${ticker}/quote?`, {
      params: {
        token: 'Tpk_08b5a20b77b74bce8c14e491f5bc75f1'
      }
    })

    dispatch({ type: 'FETCH_IEX_STOCK_DATA', payload: res.data })
  }
}

export const fetchStockHoldings = (ticker) => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:5000/stock/${ticker}`, { withCredentials: true })

    dispatch({ type: 'FETCH_STOCK_HOLDINGS', payload: res.data})
  }
}

// Actions for session/user

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