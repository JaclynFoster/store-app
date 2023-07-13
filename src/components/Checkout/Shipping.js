import React, { useContext } from 'react'
import { Divider } from 'antd'
import './Shipping.css'
import CollapseChildren from '../UI/CollapseChildren'
import AuthContext from '../../context/userContext'

const Shipping = ({
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
  state,
  setState
}) => {
  const props = useContext(AuthContext)
  return (
    <CollapseChildren>
      <form className="shipping-form-container">
        <h1>Shipping Details:</h1>
        <Divider />
        <div className="name">
          <input
            value={props.userObject.first_name}
            onChange={e => setFirstName(e.target.value)}
            className="shipping-input name"
            placeholder="First Name:"
            required
          />
          <input
            value={props.userObject.last_name}
            onChange={e => setLastName(e.target.value)}
            className="shipping-input name"
            placeholder="Last Name:"
            required
          />
        </div>

        <input
          value={props.userObject.address}
          onChange={e => setAddress(e.target.value)}
          className="shipping-input address"
          placeholder="Address:"
          required
        />
        <div className="city-state-zip">
          <input
            value={props.userObject.city}
            onChange={e => setCity(e.target.value)}
            className="shipping-input city"
            placeholder="City:"
            required
          />

          <input
            value={props.userObject.state}
            onChange={e => setState(e.target.value)}
            className="shipping-input state"
            placeholder="State:"
            required
          />

          <input
            value={props.userObject.zipcode}
            onChange={e => setZipcode(e.target.value)}
            className="shipping-input zip"
            placeholder="Zip Code:"
            required
          />
        </div>
        <button className="save-info">Next</button>
      </form>
    </CollapseChildren>
  )
}

export default Shipping

