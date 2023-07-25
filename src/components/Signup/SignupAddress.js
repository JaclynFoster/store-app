import React from 'react'
import { Divider } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import './Signup.css'

const SignupAddress = ({ signupObj, signupStateHandler }) => {
  const { address, city, state, zipcode } = signupObj
  return (
    <div className="signup-section-container">
      <div className="signup-header-container">
        <HomeOutlined className="signup-icon" />
        <h5 className="signup-header">Enter Billing Address:</h5>
      </div>
      <Divider />

      <div className="signup-label">
        <label className="signup-label">Address:</label>

        <label className="signup-label">City:</label>
      </div>
      <div className="signup-input-container">
        <input
          value={address}
          onChange={e => signupStateHandler('address', e.target.value)}
          className="signup-input"
        />

        <input
          value={city}
          onChange={e => signupStateHandler('city', e.target.value)}
          className="signup-input"
        />
      </div>

      <div className="signup-label">
        <label className="signup-label">State:</label>

        <label className="signup-label">Zip Code:</label>
      </div>
      <div className="signup-input-container">
        <input
          value={state}
          onChange={e => signupStateHandler('state', e.target.value)}
          className="signup-input"
        />

        <input
          value={zipcode}
          onChange={e => signupStateHandler('zipcode', e.target.value)}
          className="signup-input"
        />
      </div>

      <Divider />
    </div>
  )
}

export default SignupAddress


