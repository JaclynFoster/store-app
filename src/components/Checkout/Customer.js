import React, { useContext } from 'react'
import CollapseChildren from '../UI/CollapseChildren'
import './Customer.css'
import { Divider } from 'antd'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/userContext'

const Customer = ({
  email,
  setEmail,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  address,
  setAddress,
  city,
  setCity,
  zipcode,
  setZipcode,
  phone,
  setPhone,
  state,
  setState
}) => {
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
              value={props.userObject.first_name}
              onChange={e => setFirstName(e.target.value)}
              className="billing-input"
              required
            />
            <input
              value={props.userObject.last_name}
              onChange={e => setLastName(e.target.value)}
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
              value={props.userObject.address}
              onChange={e => setAddress(e.target.value)}
              className="billing-input"
              required
            />
            <input
              value={props.userObject.city}
              onChange={e => setCity(e.target.value)}
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
              value={props.userObject.state}
              onChange={e => setState(e.target.value)}
              className="billing-input"
              required
            />

            <input
              value={props.userObject.zipcode}
              onChange={e => setZipcode(e.target.value)}
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
              value={props.userObject.email}
              onChange={e => setEmail(e.target.value)}
              className="billing-input"
              type="email"
              required
            />

            <input
              value={props.userObject.phone}
              onChange={e => setPhone(e.target.value)}
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





