import React, { useEffect } from 'react'
import { fetchGroupedHoldings, fetchTotalHoldings } from '../../../actions'
import { connect } from 'react-redux'
import StockRow from '../../StockRow'

const Holdings = (props) => {
  useEffect(() => {
    props.fetchGroupedHoldings()
  }, [])
  
  // groupedHoldings is an array of arrays containing the stocks ticker at array[0] and all holdings for the
  // stock at array[1], here we map over the array and calculate the totals of units held and cost of those 
  // units to pass in to the stock row as props.
  const renderList = () => {
    return props.groupedHoldings.map(stock => {
      props.fetchTotalHoldings(stock)
      let units = 0;
      let totalCost = 0;
      const getHoldingInfo = (stock) => {
        stock[1].forEach((holding) => {
          return (
            units += holding.units, 
            totalCost += holding.price
          )
        })
      }
      getHoldingInfo(stock);
      console.log(props);

      return <StockRow ticker={stock[0]} units={units} cost={totalCost} />
    })
  }

  return (
    <div className='ui relaxed divided list'>
      <h1>Your Holdings</h1>
      {renderList()}
    </div>
  )
}

const mapStateToProps = state => {
  return { 
    groupedHoldings: state.groupedHoldings,
    holdingsInfo: state.holdingsInfo 
  }
}

export default connect(mapStateToProps, { fetchGroupedHoldings, fetchTotalHoldings })(Holdings)
