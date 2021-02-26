import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UpdateHoldings = ({stock, stockId}) => {
  useEffect(() => {
    // Calling rails API for all users holdings which match the stockId passed in with props,
    // this returns an object with holding information including date, price, stock ticker, 
    // stock id from API 
    const url = `http://localhost:5000/holdings/${stockId}`;
    const getHolding = async () => {
      const { data } = await axios.get(url)
      // setUnits(data.holdings_total);
      // setCost(data.holdings_cost);
    }
    getHolding();
  }, [])

  return (
    <div className='ui segment'>
      <h2>Update Holdings for {stock.companyName}</h2>
      <div className='current-holdings'>
        {/* <h3>Current holdings: {units}</h3>
        <h3>Current holdings cost: {cost}</h3> */}
      </div>
    </div>
  )
}

export default UpdateHoldings
