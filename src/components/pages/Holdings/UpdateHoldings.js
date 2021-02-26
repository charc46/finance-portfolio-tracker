import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const UpdateHoldings = (props) => {

  const handleUpdateHoldings = () => {
    // If user clicks on add holdings, update stock holding with amount added and current data from IEX

    // If user clicks on remove holdings, update stock holding with amount added and current data from IEX
  }

  return (
    <div className='ui segment'>
      <h2>Update Holdings for {props.stock.companyName}</h2>
      <div className='current-holdings'>
        <h3>Current holdings: {props.totalUnits} </h3>
        <h3>Current holdings cost: {props.totalCost} </h3>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    totalUnits: state.holdingsData.stockHoldings.totalUnits,
    totalCost: state.holdingsData.stockHoldings.totalCost
  }
}

export default connect(mapStateToProps)(UpdateHoldings)
