import React, { useState } from 'react'
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcAmex
} from 'react-icons/fa'
import { Divider } from 'antd'
import './Payment.css'
import CollapseChildren from '../UI/CollapseChildren'

const Payment = ({ checkoutObj, stateCheckoutHandler }) => {
  const { checkoutFirst, checkoutLast, checkoutZip } = checkoutObj
  const [cardNum, setCardNum] = useState('')
  const [cardExp, setCardExp] = useState('')
  const [cardCVV, setCardCVV] = useState('')

  return (
    <CollapseChildren>
      <form className="payment-container">
        <h1>Payment Method:</h1>
        <Divider />
        <div className="card-logo-container">
          <label>Credit Cards Accepted:</label>
          <h1>
            {' '}
            <FaCcVisa />{' '}
          </h1>
          <h1>
            <FaCcMastercard />{' '}
          </h1>
          <h1>
            <FaCcAmex />
          </h1>
          <h1>
            <FaCcDiscover />{' '}
          </h1>
        </div>
        <div className="payment-flex">
          <div className="payment-label">
            <label className="payment-label">First Name on Card:</label>
            <label className="payment-label">Last Name on Card:</label>
          </div>
          <div className="payment-input-container">
            <input
              className="payment-input-container"
              value={checkoutFirst}
              onChange={e => stateCheckoutHandler('checkoutFirst', e.target.value)}
              type="text"
              required
            />
             <input
              className="payment-input-container"
              value={checkoutLast}
              onChange={e => stateCheckoutHandler('checkoutLast', e.target.value)}
              type="text"
              required
            />
          </div>
          <div className="payment-label">
            <label className="payment-label">Credit Card Number:</label>
          </div>
          <div className="payment-input-container">
            <input
              className="payment-input-container"
              value={cardNum}
              onChange={e => setCardNum(e.target.value)}
              type="password"
              required
            />
          </div>
          <div className="payment-label">
            <label className="payment-label">Expiration:</label>
            <label className="payment-label">CVV2:</label>
          </div>
          <div className="payment-input-container">
            <input
              className="payment-input-container pay"
              value={cardExp}
              onChange={e => setCardExp(e.target.value)}
              type="text"
              required
            />
            <input
              className="payment-input-container pay"
              value={cardCVV}
              onChange={e => setCardCVV(e.target.value)}
              type="text"
              required
            />
          </div>
          <div className="payment-label">
            <label className="payment-label">Billing Zip Code:</label>
          </div>
          <div className="payment-input-container">
            <input
              className="payment-input-container pay-zip"
              value={checkoutZip}
              onChange={e => stateCheckoutHandler('checkoutZip', e.target.value)}
              type="text"
              required
            />
          </div>
        </div>
      </form>
    </CollapseChildren>
  )
}

export default Payment




