import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { Row, Col, Button, Container } from 'react-bootstrap'
import Card from '../UI/Card'
import { Divider, Image } from 'antd'
import '../Cart/CartItems.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  cartOptions,
  addToCart,
  deleteFromCart
} from '../../redux/slices/cartItemSlice'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import CartBtns from './CartBtns'
import CartTotal from './CartTotal'

const CartItems = () => {
  const dispatch = useDispatch()
  const cartAnimal = useSelector(cartOptions)
  const count = useSelector(state => state.cart.value)

  const deleteHandler = breed_id => {
    dispatch(deleteFromCart({ breed_id }))
  }

  console.log('CartAnimal:', cartAnimal)
  return (
    <Container className="cart-height">
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
              <Card overrideClass={'cart-card'}>
                <Image
                  width={100}
                  height={100}
                  className="table-img"
                  src={item.breed_image}
                />

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
                            addToCart({
                              breedObj: item,
                              quantity: -1
                            })
                          )
                        }
                        className="cart-icons"
                      />
                      <h5>{item.quantity}</h5>

                      <PlusOutlined
                        onClick={() =>
                          dispatch(addToCart({ breedObj: item, quantity: 1 }))
                        }
                        className="cart-icons"
                      />
                    </div>
                  </Col>

                  <Button
                    onClick={() => deleteHandler(item.breed_id)}
                    className="trash"
                    variant="outline-danger"
                  >
                    <BsTrash />
                  </Button>
                </Row>
              </Card>
            </div>
          )
        })
        : null}
      <Divider />
      <div className="cart-total-container">
        <CartTotal />
        <CartBtns />
      </div>
    </Container>
  )
}

export default CartItems









