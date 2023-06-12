import React from 'react'
import Modal from '../components/UI/Modal'

const Cart = (props) => {
  return (
  <Modal>
    <div>Stuff</div>
    <button onClose={props.onClose}>Close</button>
  </Modal>
    )
}

export default Cart
