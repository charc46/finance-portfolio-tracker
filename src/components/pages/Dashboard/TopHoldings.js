import React, { useEffect } from 'react'
import { fetchTopHoldings } from '../../../actions';
import { connect } from 'react-redux'

import StockRow from '../../StockRow'

const TopHoldings = (props) => {
  useEffect(() => {
    props.fetchTopHoldings();
  }, [])
  
  
  const renderedTopHoldings = () => {
    const topHoldings = props.topHoldings;
    return topHoldings.map((holding) => {
      return (
        <StockRow key={holding[0]} ticker={holding[0][0]} units={holding[1].units} cost={holding[1].price}/>
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
