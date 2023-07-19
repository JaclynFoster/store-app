import React, { useContext} from 'react'
import CollapseChildren from '../UI/CollapseChildren'
import './Customer.css'
import { Divider } from 'antd'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/userContext'

const Customer = ({ checkoutObj, stateCheckoutHandler }) => {
  const {
    checkoutFirst,
    checkoutLast,
    checkoutAddress,
    checkoutCity,
    checkoutState,
    checkoutZip,
    checkoutEmail,
    checkoutPhone
  } = checkoutObj
  const navigate = useNavigate()
  const props = useContext(AuthContext)
  console.log('props.userObject.first_name', props.userObject.first_name)
  const editProfileHandler = () => {
    navigate('/profile', { replace: true })
  }

  return (
    <CollapseChildren>
      <form className="customer-container">
        <h1>Billing Details:</h1>
        <Divider />
        <div className="input-flex">
          <div className="customer-label">
            <label className="customer-label">First Name:</label>

            <label className="customer-label">Last Name:</label>
          </div>
          <div className="customer-input-container">
            <input
              value={checkoutFirst}
              onChange={e => stateCheckoutHandler('First', e.target.value)}
              className="billing-input"
              required
            />
            <input
              value={checkoutLast}
              onChange={e => stateCheckoutHandler('Last', e.target.value)}
              className="billing-input"
              required
            />
          </div>

          <div className="customer-label">
            <label className="customer-label">Address:</label>

            <label className="customer-label">City:</label>
          </div>
          <div className="customer-input-container">
            <input
              value={checkoutAddress}
              onChange={e => stateCheckoutHandler('Address', e.target.value)}
              className="billing-input"
              required
            />
            <input
              value={checkoutCity}
              onChange={e => stateCheckoutHandler('City', e.target.value)}
              className="billing-input"
              required
            />
          </div>
          <div className="customer-label">
            <label className="customer-label">State:</label>

            <label className="customer-label">Zipcode:</label>
          </div>
          <div className="customer-input-container">
            <input
              value={checkoutState}
              onChange={e => stateCheckoutHandler('State', e.target.value)}
              className="billing-input"
              required
            />

            <input
              value={checkoutZip}
              onChange={e => stateCheckoutHandler('Zip', e.target.value)}
              className="billing-input"
              required
            />
          </div>
          <div className="customer-label">
            <label className="customer-label">Email:</label>

            <label className="customer-label">Phone:</label>
          </div>
          <div className="customer-input-container">
            <input
              value={checkoutEmail}
              onChange={e => stateCheckoutHandler('Email', e.target.value)}
              className="billing-input"
              type="email"
              required
            />

            <input
              value={checkoutPhone}
              onChange={e => stateCheckoutHandler('Phone', e.target.value)}
              className="billing-input"
              required
            />
          </div>
        </div>
      </form>
      <span className="guest-span">
        Need to Update Account?
        <a onClick={editProfileHandler} className="signin-link">
          Edit Profile
        </a>{' '}
      </span>
    </CollapseChildren>
  )
}

export default Customer






