import axios from 'axios'

export const fetchTopHoldings = () => {
  return async (dispatch) => {
    const url = 'http://localhost:3001/api/v1/users/holdings'
    const response = await axios.get(url)

    dispatch({ type: 'FETCH_TOP_HOLDINGS', payload: response.data.topHoldings })
  }
}