import React from 'react'
import { Divider } from 'antd'

const SignupCredentials = ({ signupObj, signupStateHandler }) => {
  const { newUsername, newPassword } = signupObj
  return (
    <div className="profile-section-container">
      <h5 className="profile-header">Enter Login Credentials:</h5>
      <Divider />

      <div className="profile-label">
        <label className="profile-label">Create Username:</label>

        <label className="profile-label">Create Password:</label>
      </div>
      <div className="profile-input-container">
        <input
          value={newUsername}
          className="profile-input"
          onChange={e => signupStateHandler('new username', e.target.value)}
        />

        <input
          value={newPassword}
          type="password"
          onChange={e => signupStateHandler('new password', e.target.value)}
          className="profile-input"
        />
      </div>
      <Divider />
    </div>
  )
}

export default SignupCredentials

