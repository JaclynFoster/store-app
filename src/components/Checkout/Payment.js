import React from 'react'
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcAmex
} from 'react-icons/fa'
import { Divider } from 'antd'
import './Payment.css'
import CollapseChildren from '../UI/CollapseChildren'


const Payment = () => {
  return (
    <CollapseChildren>
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
      <div className="payment-container">
        <div className="pay-flex-one">
          <input
            className="pay-input"
            placeholder="Name on Card"
            type="text"
            required
          />
          <input
            className="pay-input"
            placeholder="Credit Card Number"
            type="password"
            required
          />
        </div>
        <div className="pay-flex">
          <input
            className="pay"
            placeholder="Expiration (MM/YY)"
            type="text"
            required
          />
          <input
            className="security-code"
            placeholder="CVV2"
            type="text"
            required
          />
          <input
            className="pay"
            placeholder="Billing Zip Code"
            type="text"
            required
          />
        </div>
        <button className="pay-save">Save</button>
      </div>
    </CollapseChildren>
  )
}

export default Payment
