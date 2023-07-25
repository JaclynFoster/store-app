import React from 'react'
import { Divider, Image } from 'antd'
import './CartSummary.css'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cartOptions } from '../../redux/slices/cartItemSlice'
import { totalCartAmount, cartTax, grandTotal } from '../../utils/utils'

const CartSummary = () => {
  const dispatch = useDispatch()
  const cartAnimal = useSelector(cartOptions)
  return (
    <aside className="cart-summary-container">
      <h3 className="summary-title">Cart Summary:</h3>
      <Divider />
      <div className="cart-item-display">
        {cartAnimal
          ? Object.values(cartAnimal).map(item => {
            return (
              <div className="item-container">
                <Row>
                  <Col>
                    <Image
                      width={50}
                      height={50}
                      src={item.breed_image}
                      className="summary-img"
                    />
                  </Col>
                  <Col>
                    <span>{item.breed_name}</span>
                  </Col>
                  <Col>
                    <span> x {item.quantity}</span>
                  </Col>
                  <Col>
                    <span>${item.price}.00</span>
                  </Col>
                </Row>
              </div>
            )
          })
          : null}
      </div>
      <Divider />
      <div className="sub-container">
        <Row>
          <Col>Subtotal:</Col>
          <Col>${totalCartAmount(cartAnimal)}</Col>
        </Row>
        <Row>
          <Col>Shipping:</Col>
          <Col>
            <strong>FREE</strong>
          </Col>
        </Row>
        <Row>
          <Col>Est. Taxes & Fees:</Col>
          <Col>${cartTax(cartAnimal)}</Col>
        </Row>
        <Row>
          <Col>Est. Total:</Col>
          <Col>
            <strong>${grandTotal(cartAnimal)}</strong>
          </Col>
        </Row>
      </div>
    </aside>
  )
}

export default CartSummary

