import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addHolding } from '../../../actions'

const UpdateHoldings = (props) => {
  console.log(props)

  const handleAddHoldings = (e) => {
    e.preventDefault()
    // If user clicks on add holdings, update stock holding with amount added and current data from IEX
    const amount = e.target[0].value
    props.addHolding(
      props.stock.companyName,
      props.stock.symbol,
      props.stock.latestPrice,
      amount,
      new Date().toLocaleString(),
    )
  }

  const handleRemoveHoldings = (e) => {
    e.preventDefault()
    // If user clicks on remove holdings, update stock holding with amount added and current data from IEX
  }
  return (
    <div className='ui segment'>
      <h2>Update Holdings for {props.stock.companyName}</h2>
      <div className='current-holdings'>
        <h3>Current holdings: {props.totalUnits} </h3>
        <h3>Current holdings cost: {props.totalCost} </h3>
      </div>
      <div className='actions'>
        <form onSubmit={handleAddHoldings}>
          <input type="number" name='amount' />
          <button type='submit'>Add Holdings</button>
        </form>
        <form onSubmit='handleRemoveHoldings'>
          <input type="number" />
          <button type='submit'>Remove Holdings</button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.currentUser,
    totalUnits: state.holdingsData.stockHoldings.totalUnits,
    totalCost: state.holdingsData.stockHoldings.totalCost
  }
}

export default connect(mapStateToProps, { addHolding })(UpdateHoldings)
