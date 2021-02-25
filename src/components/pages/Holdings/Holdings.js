import React, { useEffect } from 'react'
import { fetchHoldings } from '../../../actions'
import { connect } from 'react-redux'
import StockRow from '../../StockRow'

const Holdings = (props) => {
  useEffect(() => {
    props.fetchHoldings()
  }, [])
  
  // groupedHoldings is an array of arrays containing the stocks ticker at array[0] and all holdings for the
  // stock at array[1], here we map over the array and calculate the totals of units held and cost of those 
  // units to pass in to the stock row as props.
  // const renderList = () => {
  //   return props.allHoldings.map(stock => {
  //     // props.fetchTotalHoldings(stock)
  //     // let units = 0;
  //     // let totalCost = 0;
  //     // const getHoldingInfo = (stock) => {
  //     //   stock[1].forEach((holding) => {
  //     //     return (
  //     //       units += holding.units, 
  //     //       totalCost += holding.price
  //     //     )
  //     //   })
  //     // }
  //     // getHoldingInfo(stock);
  //     // console.log(props);

  //     return <StockRow key={stock.id} ticker={stock.ticker} units={stock.units} cost={stock.price} />
  //   })
  // }

  const holding = props.allHoldings.holdings[0];
  console.log(props.allHoldings.holdings[0]);
  return (
    <div className='ui relaxed divided list'>
      <h1>Your Holdings</h1>
      {/* {renderList()} */}
      <StockRow key={holding.id} ticker={holding.ticker} units={holding.units} cost={holding.price} />
    </div>
  )
}

const mapStateToProps = state => {
  return { 
    allHoldings: state.allHoldings,
    user: state.user
  }
}

export default connect(mapStateToProps, { fetchHoldings })(Holdings)
