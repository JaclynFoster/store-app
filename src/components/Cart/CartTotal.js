import React from 'react'
import { totalCartAmount, cartTax, grandTotal } from '../../utils/utils'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { cartOptions } from '../../redux/slices/cartItemSlice'

const CartTotal = () => {
  const cartAnimal = useSelector(cartOptions)
  return (
    <div>
      <Row>
        <Col>Subtotal</Col>
        <Col>${totalCartAmount(cartAnimal)}</Col>
      </Row>
      <Row>
        <Col>Shipping</Col>
        <Col>
          <strong>FREE</strong>
        </Col>
      </Row>
      <Row>
        <Col>Est. Taxes & Fees</Col>
        <Col>${cartTax(cartAnimal)}</Col>
      </Row>
      <Row>
        <Col>Est. Total</Col>
        <Col>
          <strong>${grandTotal(cartAnimal)}</strong>
        </Col>
      </Row>
    </div>
  )
}

export default CartTotal
