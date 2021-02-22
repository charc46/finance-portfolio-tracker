import axios from 'axios'

export const fetchTopHoldings = () => {
  return async (dispatch) => {
    const url = 'http://localhost:3001/api/v1/users/holdings'
    const response = await axios.get(url)

    dispatch({ type: 'FETCH_TOP_HOLDINGS', payload: response.data.topHoldings })
  }
}

export const fetchHoldings = () => {
  return async (dispatch) => {
    const url = 'http://localhost:3001/api/v1/users/holdings'
    const response = await axios.get(url)

    dispatch({ type: 'FETCH_HOLDINGS', payload: response.data.holdings })
  }
}

export const fetchGroupedHoldings = () => {
  return async (dispatch) => {
    const url = `http://localhost:3001/api/v1/users/holdings/`
    const response = await axios.get(url)

    dispatch({ type: 'FETCH_GROUPED_HOLDINGS', payload: response.data.groupedHoldings })
  }
}


export const fetchTotalHoldings = (stock) => {
  return async (dispatch) => {
    const url = `http://localhost:3001/api/v1/users/holdings/${stock[0]}`
    const response = await axios.get(url)

    dispatch({ type: 'FETCH_TOTAL_HOLDINGS', payload: response.data.holdingsInfo })
  }
}