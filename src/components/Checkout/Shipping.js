import React, { useContext } from 'react'
import { Divider } from 'antd'
import './Shipping.css'
import CollapseChildren from '../UI/CollapseChildren'
import AuthContext from '../../context/userContext'

const Shipping = ({ checkoutObj, stateCheckoutHandler }) => {
  const {
    checkoutFirst,
    checkoutLast,
    checkoutAddress,
    checkoutCity,
    checkoutState,
    checkoutZip
  } = checkoutObj
  const props = useContext(AuthContext)

  return (
    <CollapseChildren>
      <form className="shipping-container">
        <h1>Shipping Details:</h1>
        <Divider />
        <div className="input-flex">
          <div className="shipping-label">
            <label className="shipping-label">First Name:</label>
            <label className="shipping-label">Last Name:</label>
          </div>
          <div className="shipping-input-container">
            <input
              value={checkoutFirst}
              onChange={e =>
                stateCheckoutHandler('checkoutFirst', e.target.value)
              }
              className="shipping-input"
              required
            />
            <input
              value={checkoutLast}
              onChange={e =>
                stateCheckoutHandler('checkoutLast', e.target.value)
              }
              className="shipping-input"
              required
            />
          </div>
          <div className="shipping-label">
            <label className="shipping-label">Address:</label>
            <label className="shipping-label">City:</label>
          </div>
          <div className="shipping-input-container">
            <input
              value={checkoutAddress}
              onChange={e =>
                stateCheckoutHandler('checkoutAddress', e.target.value)
              }
              className="shipping-input"
              required
            />
            <input
              value={checkoutCity}
              onChange={e =>
                stateCheckoutHandler('checkoutCity', e.target.value)
              }
              className="shipping-input"
              required
            />
          </div>
          <div className="shipping-label">
            <label className="shipping-label">State:</label>
            <label className="shipping-label">Zip Code:</label>
          </div>
          <div className="shipping-input-container">
            <input
              value={checkoutState}
              onChange={e =>
                stateCheckoutHandler('checkoutState', e.target.value)
              }
              className="shipping-input"
              required
            />
            <input
              value={checkoutZip}
              onChange={e =>
                stateCheckoutHandler('checkoutZip', e.target.value)
              }
              className="shipping-input"
              required
            />
          </div>
        </div>
      </form>
    </CollapseChildren>
  )
}

export default Shipping






