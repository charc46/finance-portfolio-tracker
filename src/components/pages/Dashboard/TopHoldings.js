import React, { useEffect } from 'react'
import { fetchTopHoldings } from '../../../actions';
import { connect } from 'react-redux'

import StockRow from '../../StockRow'

const TopHoldings = (props) => {
  useEffect(() => {
    props.fetchTopHoldings();
    console.log(props.topHoldings);
  }, [])
  
  
  const renderedTopHoldings = () => {
    const topHoldings = props.topHoldings.slice(0, 3);
    console.log(topHoldings);
    return topHoldings.slice(0, 3).map((holding) => {
      return (
        <StockRow key={holding.ticker} ticker={holding.ticker} units={holding.units} />
      )
    })
  } 

  return (
    <div className='ui segment top-holdings'>
      <h1>Top Holdings</h1>
      {renderedTopHoldings()}
    </div>
    )
  }

const mapStateToProps = state => {
  return { topHoldings: state.topHoldings}
}

export default connect(mapStateToProps, { fetchTopHoldings })(TopHoldings)
