import React from 'react'
import { Divider } from 'antd'
import { UnlockOutlined } from '@ant-design/icons'
import './Signup.css'

const SignupCredentials = ({ signupObj, signupStateHandler }) => {
  const { newUsername, newPassword } = signupObj
  return (
    <div className="signup-section-container">
      <div className="signup-header-container">
        <UnlockOutlined className="signup-icon" />
        <h5 className="signup-header">Enter Login Credentials:</h5>
      </div>
      <Divider />

      <div className="signup-label">
        <label className="signup-label">Create Username:</label>

        <label className="signup-label">Create Password:</label>
      </div>
      <div className="signup-input-container">
        <input
          value={newUsername}
          className="signup-input"
          onChange={e => signupStateHandler('newUsername', e.target.value)}
        />

        <input
          value={newPassword}
          type="password"
          onChange={e => signupStateHandler('newPassword', e.target.value)}
          className="signup-input"
        />
      </div>
      <Divider />
    </div>
  )
}

export default SignupCredentials


