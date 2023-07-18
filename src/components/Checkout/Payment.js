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
            <label className="payment-label">Name on Card:</label>
          </div>
          <div className="payment-input-container">
            <input
              className="payment-input-container"
              placeholder="Name on Card"
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
              placeholder="Credit Card Number"
              type="password"
              required
            />
          </div>
          <div className="payment-label">
            <label className="payment-label">Expiration:</label>
            <label className="payment-label code">CVV2:</label>
          </div>
          <div className="payment-input-container">
            <input
              className="payment-input-container pay"
              placeholder="Expiration (MM/YY)"
              type="text"
              required
            />
            <input
              className="payment-input-container pay"
              placeholder="CVV2"
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
              placeholder="Billing Zip Code"
              type="text"
              required
            />
          </div>
        </div>
        <button className="pay-save">Next</button>
      </form>
    </CollapseChildren>
  )
}

export default Payment

