import React from 'react'
import { FcOk } from 'react-icons/fc'
import './Confirmation.css'

const Confirmation = () => {
  const purchaseDate = () => {
    const date = new Date().toJSON().slice(0, 10)
    return date
  }

  const randomNumber = () => {
    let number = Math.floor(Math.random() * 9000000000) + 1000000000
    return number
  }

  return (
    <div className="confirm-container">
      <FcOk className="confirm-icon" />
      <h1>Success!</h1>
      <h3>
        <strong>Your order has been confirmed.</strong>
      </h3>
      <h5>Confirmation Details are below:</h5>
      <h5>
        <strong>Order Number:</strong> {randomNumber()}{' '}
      </h5>

      <h5>
        <strong>Purchase Date:</strong> {purchaseDate()}
      </h5>
      <h6>
        Please allow up to 2 business day for orders to be processed. Check your
        email for further information and tracking details.
      </h6>
    </div>
  )
}

export default Confirmation


