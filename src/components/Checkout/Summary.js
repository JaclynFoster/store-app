import React from 'react'
import CollapseChildren from '../UI/CollapseChildren'
import { Divider } from 'antd'
import './Summary.css'
import { useSelector } from 'react-redux'
import { cartOptions } from '../../redux/slices/cartItemSlice'
import { cartTax, totalCartAmount, grandTotal } from '../../utils/utils'

const Summary = () => {
  const cartAnimal = useSelector(cartOptions)

  return (
    <CollapseChildren className="total-container">
      <div className="subtotal">
        <h5>Subtotal: </h5>

        <span>${totalCartAmount(cartAnimal)}</span>
      </div>
      <div className="shipping">
        <h5>Shipping & Handling</h5>
        <span>FREE</span>
      </div>
      <div className="tax">
        <h5>Taxes & Fees</h5>
        <span>${cartTax(cartAnimal)}</span>
      </div>
      <Divider />
      <div className="balance">
        <h4>Balance: </h4>
        <h4>${grandTotal(cartAnimal)}</h4>
      </div>
      <div className="complete-order">
        <p className="terms">
          By clicking "Complete Order" you are agreeing to our{' '}
          <a className="conditions">terms and conditions</a>.
        </p>

        <label className="money-back-label">30-Day Money Back Guarantee</label>
      </div>
    </CollapseChildren>
  )
}

export default Summary





