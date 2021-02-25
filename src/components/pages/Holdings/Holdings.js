import React, { useEffect } from 'react'
import { fetchHoldings } from '../../../actions'
import { connect } from 'react-redux'
import StockRow from '../../StockRow'

const Holdings = (props) => {
  
  const holding = props.allHoldings.holdings[0];

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
