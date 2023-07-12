import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { IoBagCheckOutline } from 'react-icons/io5'
import { ImCancelCircle } from 'react-icons/im'
import { MdOutlineShopTwo } from 'react-icons/md'
import './CartBtns.css'
import { useNavigate } from 'react-router-dom'

const CartBtns = () => {
  const navigate = useNavigate()

  const toCheckout = () => {
    navigate('/checkout', { replace: true })
  }

  const keepShopping = () => {
    navigate('/animals', { replace: true })
  }

  const onCancel = () => {
    navigate('/', { replace: true })
  }
  return (
    <div className="total-btns">
      <Row>
        <Col>
          <button onClick={toCheckout} className="cart-btn">
            <IoBagCheckOutline /> Checkout
          </button>
        </Col>
        <Col>
          <button onClick={keepShopping} className="cart-btn ks">
            <MdOutlineShopTwo /> Keep Shopping
          </button>
        </Col>
        <Col>
          <button onClick={onCancel} className="cart-btn">
            <ImCancelCircle /> Cancel
          </button>
        </Col>
      </Row>
    </div>
  )
}

export default CartBtns
