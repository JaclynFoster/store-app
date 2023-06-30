import React from 'react'
import CollapseChildren from '../UI/CollapseChildren'
import { Divider } from 'antd'
import './Summary.css'

const Summary = () => {
  return (
    <CollapseChildren className="total-container">
      <div className="subtotal">
        <h5>Subtotal: (5 items)</h5>
        <span> $18.00</span>
      </div>
      <div className="shipping">
        <h5>Shipping & Handling</h5>
        <span>FREE</span>
      </div>
      <div className="tax">
        <h5>Tax (Calculated at checkout)</h5>
        <span>$0.00</span>
      </div>
      <Divider />
      <div className="balance">
        <h4>Balance: </h4>
        <h4>$18.00</h4>
      </div>
      <div className="complete-order">
        <p className="terms">
          By clicking "Complete Order" you are agreeing to our{' '}
          <a className="conditions">terms and conditions</a>.
        </p>
        <button className="complete-btn">Complete Order</button>
        <label className="money-back-label">30-Day Money Back Guarantee</label>
      </div>
    </CollapseChildren>
  )
}

export default Summary
