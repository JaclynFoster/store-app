import React from 'react'
import { Divider } from 'antd'
import './Shipping.css'
import CollapseChildren from '../UI/CollapseChildren'

const Shipping = ({
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
  return (
    <CollapseChildren>
      <form className="shipping-form-container">
        <h1>Shipping Details:</h1>
        <Divider />
        <div className="name">
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className="shipping-input"
            placeholder="First Name:"
            required
          />
          <input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className="shipping-input"
            placeholder="Last Name:"
            required
          />
        </div>

        <input
          value={address}
          onChange={e => setAddress(e.target.value)}
          className="shipping-input address"
          placeholder="Address:"
          required
        />
        <div className="city-state-zip">
          <input
            value={city}
            onChange={e => setCity(e.target.value)}
            className="shipping-input city"
            placeholder="City:"
            required
          />

          <input
            value={state}
            onChange={e => setState(e.target.value)}
            className="shipping-input state"
            placeholder="State:"
            required
          />

          <input
            value={zipcode}
            onChange={e => setZipcode(e.target.value)}
            className="shipping-input zip"
            placeholder="Zip Code:"
            required
          />
        </div>

        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="shipping-input address"
          type="email"
          placeholder="Email:"
          required
        />

        <input
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="shipping-input phone"
          placeholder="Phone:"
          required
        />
        <button className="save-info">Save</button>
      </form>
    </CollapseChildren>
  )
}

export default Shipping
