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
              value={props.userObject.first_name}
              onChange={e => setFirstName(e.target.value)}
              className="shipping-input"
              required
            />
            <input
              value={props.userObject.last_name}
              onChange={e => setLastName(e.target.value)}
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
              value={props.userObject.address}
              onChange={e => setAddress(e.target.value)}
              className="shipping-input"
              required
            />

            <input
              value={props.userObject.city}
              onChange={e => setCity(e.target.value)}
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
              value={props.userObject.state}
              onChange={e => setState(e.target.value)}
              className="shipping-input"
              required
            />

            <input
              value={props.userObject.zipcode}
              onChange={e => setZipcode(e.target.value)}
              className="shipping-input"
              required
            />
          </div>
        </div>

        <button className="save-info">Next</button>
      </form>
    </CollapseChildren>
  )
}

export default Shipping


