import React from 'react'
import CollapseChildren from '../UI/CollapseChildren'
import './Customer.css'
import { Divider } from 'antd'
import { useNavigate } from 'react-router-dom'

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

  const editProfileHandler = () => {
    navigate('/profile', { replace: true })
  }

  return (
    <CollapseChildren>
      <form className="shipping-form-container">
      <h1>Billing Details:</h1>
        <Divider />
        <div className="name">
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className="billing-input name"
            placeholder="First Name:"
            required
          />
          <input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className="billing-input name"
            placeholder="Last Name:"
            required
          />
        </div>

        <input
          value={address}
          onChange={e => setAddress(e.target.value)}
          className="billing-input address"
          placeholder="Address:"
          required
        />
        <div className="city-state-zip">
          <input
            value={city}
            onChange={e => setCity(e.target.value)}
            className="billing-input city"
            placeholder="City:"
            required
          />

          <input
            value={state}
            onChange={e => setState(e.target.value)}
            className="billing-input state"
            placeholder="State:"
            required
          />

          <input
            value={zipcode}
            onChange={e => setZipcode(e.target.value)}
            className="billing-input zip"
            placeholder="Zip Code:"
            required
          />
        </div>

        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="billing-input address"
          type="email"
          placeholder="Email:"
          required
        />

        <input
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="billing-input phone"
          placeholder="Phone:"
          required
        />
        <button className="save-info">Save</button>
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


