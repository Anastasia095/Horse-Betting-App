import React, { useState } from 'react';
import '../css/payment.css';
import BetModal from '../components/BetModal';
import StripeContainer from '../components/StripeContainer';

function Payment() {
  const[showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>Place Your Bets!</h1>
      {showItem ? <StripeContainer/> : <> <h3>$10.00</h3><button onClick={() => setShowItem(true)}>Bet on this race</button></>}
      <BetModal />
    </div>
  )
}

export default Payment;