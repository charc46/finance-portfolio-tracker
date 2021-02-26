import React, { useEffect } from 'react'
import { fetchHoldings } from '../../../actions'
import { connect } from 'react-redux'
import StockRow from '../../StockRow'

const Holdings = (props) => {
  console.log(props);
  const holding = props.holdings[0];

  if(props.holdings) {
    return (
      <div className='ui relaxed divided list'>
        <h1>Your Holdings</h1>
        {/* {renderList()} */}
        <StockRow key={holding.id} ticker={holding.ticker} units={holding.units} cost={holding.price} />
      </div>
    )
  }
  return <h1>Loading</h1>
}

const mapStateToProps = state => {
  console.log(state);
  return { 
    holdings: state.holdingsData.allHoldings,
    user: state.currentUser.user
  }
}

export default connect(mapStateToProps)(Holdings)
