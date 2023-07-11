import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { IoBagCheckOutline, IoLogoHtml5 } from 'react-icons/io5'
import { ImCancelCircle } from 'react-icons/im'
import { MdOutlineShopTwo } from 'react-icons/md'
import { Row, Col, Button, Container } from 'react-bootstrap'
import { Divider, Card } from 'antd'
import '../Cart/CartItems.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartOptions, changeQuantity } from '../../redux/slices/cartItemSlice'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

const CartItems = ({ breed }) => {
  const dispatch = useDispatch()
  const cartAnimal = useSelector(cartOptions)
  const count = useSelector(state => state.cart.value)
  const navigate = useNavigate()

  const calculateQuantity = (quantity, price) => {
    return quantity * Number(price)
  }

  const totalCartAmount = () => {
    console.log('Animal:', Object.values(cartAnimal))

    return Object.values(cartAnimal)
      .reduce((acc, curr) => {
        return acc + calculateQuantity(curr.quantity, curr.price)
      }, 0)
      .toFixed(2)
  }

  const cartTax = () => {
    return (totalCartAmount() * 0.0825).toFixed(2)
  }

  const grandTotal = () => {
    console.log('cartTax', typeof cartTax())
    console.log('totalCartAmount', typeof totalCartAmount())
    return Number(cartTax()) + Number(totalCartAmount())
  }
  const toCheckout = () => {
    navigate('/checkout', { replace: true })
  }

  const keepShopping = () => {
    navigate('/animals', { replace: true })
  }

  const onCancel = () => {
    navigate('/', { replace: true })
  }
  console.log('CartAnimal:', cartAnimal)
  return (
    <Container>
      {cartAnimal
        ? Object.values(cartAnimal).map(item => {
          {
            console.log('Object.values:', cartAnimal)
          }
          {
            console.log('item', item)
          }
          return (
            <div className="cart-detail-container">
              <Card>
                <Button className="trash" variant="outline-danger">
                  <BsTrash />
                </Button>
                <img className="table-img" src={item.breed_image} />
                <Row>
                  <Col>
                    <h4 className="cart-name">{item.breed_name}</h4>
                  </Col>

                  <Col>
                    <h5>Price:</h5>
                    <h5>${item.price}.00</h5>
                  </Col>

                  <Col>
                    <h5>Qty:</h5>

                    <div className="cart-qty">
                      <MinusOutlined
                        onClick={() =>
                          dispatch(
                            changeQuantity({
                              id: item.breed_id,
                              quantity: -1
                            })
                          )
                        }
                        className="cart-icons"
                      />
                      <h5>{item.quantity}</h5>

                      <PlusOutlined
                        onClick={() =>
                          dispatch(
                            changeQuantity({ id: item.breed_id, quantity: 1 })
                          )
                        }
                        className="cart-icons"
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
          )
        })
        : null}

      <div className="cart-total-container">
        <Row>
          <Col>Subtotal</Col>
          <Col>${totalCartAmount()}</Col>
        </Row>
        <Row>
          <Col>Shipping</Col>
          <Col>
            <strong>FREE</strong>
          </Col>
        </Row>
        <Row>
          <Col>Est. Taxes & Fees</Col>
          <Col>${cartTax()}</Col>
        </Row>
        <Row>
          <Col>Est. Total</Col>
          <Col>
            <strong>${grandTotal()}</strong>
          </Col>
        </Row>

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
      </div>
    </Container>
  )
}

export default CartItems




