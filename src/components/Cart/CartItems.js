import React from 'react'
import Card from '../UI/Card'
import { Table, Button, ButtonGroup } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import { IoBagCheckOutline } from 'react-icons/io5'
import { ImCancelCircle } from 'react-icons/im'
import { MdOutlineShopTwo } from 'react-icons/md'
import goat from '../../images/goat.jpg'
import '../Cart/CartItems.css'
import { useNavigate } from 'react-router-dom'

const CartItems = () => {
  const navigate = useNavigate()

  const toCheckout = () => {
    navigate('/checkout', {replace: true})
  }

  const keepShopping = () => {
    navigate('/animals', {replace: true})
  }

  const onCancel = () => {
    navigate('/', {replace: true})
  }
  return (
    <div>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>#</th>
            <th colSpan="2">Animal</th>

            <th>Quantity:</th>
            <th>Price:</th>
            <th>Delete: </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img className="table-img" src={goat} />
            </td>
            <td>Crested Gecko</td>
            <td>2</td>
            <td>$15.00</td>
            <td>
              <Button className="trash" variant="outline-danger">
                <BsTrash />
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img />
            </td>
            <td>Muscovy Duck</td>
            <td>6</td>
            <td>$25.00</td>
            <td>
              <Button className="trash" variant="outline-danger">
                <BsTrash />
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img />
            </td>
            <td>Sulcata Tortoise</td>
            <td>1</td>
            <td>$250.00</td>
            <td>
              <Button className="trash" variant="outline-danger">
                <BsTrash />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <div className="total-container">
        <div className="total">
          <h3>Total:</h3>
          <h5>$375.00</h5>
        </div>
        <div className="total-btns">
          <button onClick={toCheckout} className="cart-btn">
            <IoBagCheckOutline />  Checkout
          </button>
          <button onClick={keepShopping} className="cart-btn">
            <MdOutlineShopTwo /> Keep Shopping
          </button>
          <button onClick={onCancel} className="cart-btn">
            <ImCancelCircle />  Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItems

