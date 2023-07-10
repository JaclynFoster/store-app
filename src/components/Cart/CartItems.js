import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { IoBagCheckOutline, IoLogoHtml5 } from 'react-icons/io5'
import { ImCancelCircle } from 'react-icons/im'
import { MdOutlineShopTwo } from 'react-icons/md'
import { Row, Col, Button, Container } from 'react-bootstrap'
import { Divider,Card } from 'antd'
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

  const totalCartAmount = () => {
    return Object.values(cartAnimal).reduce((acc, curr) => {
      return (acc + curr.price || 0)
    },"")
  }

  const cartTax = () => {
    return Object.values(cartAnimal).reduce((acc, curr) => {
     console.log("Total Tax", acc + curr.price)
     return (acc + curr.price * .08 || 0)
    }, 0)
  }

  const grandTotal = () => {
    return Object.values(cartAnimal).reduce((acc, curr) => {
      let total = (acc + curr.price) * 1.08 
      console.log(total)
      return (Math.round(total) || 0)
    }, 0)
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
            <Card>
         
         <Button className="trash" variant="outline-danger">
                <BsTrash />
              </Button>
              <img className="table-img" src={item.breed_image} />
              <div className="cart-detail-container">
               
                
               
              <h4>{item.breed_name}</h4>
              
            <div className="cart-price">

                <h5>Price:</h5>
              <h5>${item.price}.00</h5>
            </div>
               
              <div className="cart-qty">
              <h5>Qty:</h5>

                <MinusOutlined
                onClick={() =>
                  dispatch(
                    changeQuantity({ id: item.breed_id, quantity: -1 })
                    )
                  }
                  className="cart-icons"
                  />
                  <h5>{item.quantity}</h5> 
         

                <PlusOutlined
                onClick={() =>
                  dispatch(changeQuantity({ id: item.breed_id, quantity: 1 }))
                }
                className="cart-icons"
                />
               
               
                </div>
                
                
            
              </div>
           
          

             
            
             

             

            </Card>
          )
        })
        : null}


              <div className="cart-total-container">

              <Row>
                <Col>
                  Subtotal
                </Col>
                <Col>
             ${totalCartAmount()}.00
                </Col>
              </Row>
              <Row>
                <Col>Shipping</Col>
                <Col><strong>FREE</strong></Col>
              </Row>
              <Row>
                <Col>
                Est. Taxes & Fees</Col>
                <Col>${cartTax()}</Col>
              </Row>
              <Row>
                <Col>Est. Total</Col>
                <Col><strong>${grandTotal()}</strong></Col>
              </Row>
            
        <div className="total-btns">
          <Row>
          <Col >
          <button onClick={toCheckout} className="cart-btn">
            <IoBagCheckOutline /> Checkout
          </button>
        
          </Col>
          <Col >
          <button onClick={keepShopping} className="cart-btn ks">
            <MdOutlineShopTwo /> Keep Shopping
          </button>
          
          </Col>
          <Col >
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



