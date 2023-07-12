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
  console.log("props.userObject.first_name", props.userObject.first_name)
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
            value={props.userObject.first_name}
            onChange={e => setFirstName(e.target.value)}
            className="billing-input name"
            placeholder="First Name:"
            required
          />
          <input
            value={props.userObject.last_name}
            onChange={e => setLastName(e.target.value)}
            className="billing-input name"
            placeholder="Last Name:"
            required
          />
        </div>

        <input
          value={props.userObject.address}
          onChange={e => setAddress(e.target.value)}
          className="billing-input address"
          placeholder="Address:"
          required
        />
        <div className="city-state-zip">
          <input
            value={props.userObject.city}
            onChange={e => setCity(e.target.value)}
            className="billing-input city"
            placeholder="City:"
            required
          />

          <input
            value={props.userObject.state}
            onChange={e => setState(e.target.value)}
            className="billing-input state"
            placeholder="State:"
            required
          />

          <input
            value={props.userObject.zipcode}
            onChange={e => setZipcode(e.target.value)}
            className="billing-input zip"
            placeholder="Zip Code:"
            required
          />
        </div>

        <input
          value={props.userObject.email}
          onChange={e => setEmail(e.target.value)}
          className="billing-input address"
          type="email"
          placeholder="Email:"
          required
        />

        <input
          value={props.userObject.phone}
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


