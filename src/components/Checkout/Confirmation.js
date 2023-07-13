import React from 'react'
import { FcOk } from 'react-icons/fc'
import './Confirmation.css'

const Confirmation = () => {
  return (
    <div className="confirm-container">
      <FcOk className="confirm-icon" />
      <h1>Success!</h1>
      <h3>Your order has been confirmed. Confirmation Details are below.</h3>
      <h5>Order Number: </h5>

      <h5>Purchase Date:</h5>
      <h6>
        Please allow up to 2 business day for orders to be processed. Please
        check your email for further information and tracking details.
      </h6>
    </div>
  )
}

export default Confirmation

