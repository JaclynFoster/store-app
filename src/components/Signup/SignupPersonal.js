import React from 'react'
import { Divider } from 'antd'
import { IdcardOutlined } from '@ant-design/icons'
import './Signup.css'

const SignupPersonal = ({ signupObj, signupStateHandler }) => {
  const { firstName, lastName, email, phone } = signupObj
  return (
    <div className="signup-section-container">
      <div className="signup-header-container">
        <IdcardOutlined className="signup-icon" />
        <h5 className="signup-header">Enter Personal Details:</h5>
      </div>
      <Divider />
      <div className="signup-label">
        <label className="signup-label">First Name:</label>

        <label className="signup-label">Last Name:</label>
      </div>
      <div className="signup-input-container">
        <input
          value={firstName}
          onChange={e => signupStateHandler('firstName', e.target.value)}
          className="signup-input"
        />

        <input
          value={lastName}
          onChange={e => signupStateHandler('lastName', e.target.value)}
          className="signup-input"
        />
      </div>
      <div className="signup-label">
        <label className="signup-label">Phone:</label>

        <label className="signup-label">Email:</label>
      </div>
      <div className="signup-input-container">
        <input
          value={phone}
          onChange={e => signupStateHandler('phone', e.target.value)}
          className="signup-input"
        />

        <input
          value={email}
          onChange={e => signupStateHandler('email', e.target.value)}
          className="signup-input"
        />
      </div>

      <Divider />
    </div>
  )
}

export default SignupPersonal

