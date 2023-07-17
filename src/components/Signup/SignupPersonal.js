import React from 'react'
import { Divider } from 'antd'

const SignupPersonal = ({ signupObj, signupStateHandler }) => {
  const { firstName, lastName, email, phone } = signupObj
  return (
    <div className="profile-section-container">
      <h5 className="profile-header">Enter Personal Details:</h5>
      <Divider />
      <div className="profile-label">
        <label className="profile-label">First Name:</label>

        <label className="profile-label">Last Name:</label>
      </div>
      <div className="profile-input-container">
        <input
          value={firstName}
          onChange={e => signupStateHandler('first_name', e.target.value)}
          className="profile-input"
        />

        <input
          value={lastName}
          onChange={e => signupStateHandler('last_name', e.target.value)}
          className="profile-input"
        />
      </div>
      <div className="profile-label">
        <label className="profile-label">Phone:</label>

        <label className="profile-label">Email:</label>
      </div>
      <div className="profile-input-container">
        <input
          value={phone}
          onChange={e => signupStateHandler('phone', e.target.value)}
          className="profile-input"
        />

        <input
          value={email}
          onChange={e => signupStateHandler('email', e.target.value)}
          className="profile-input"
        />
      </div>

      <Divider />
    </div>
  )
}

export default SignupPersonal
