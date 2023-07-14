import React from 'react'
import { Divider } from 'antd'
import './Profile.css'

const Credentials = ({ password, infoObj, stateInfoHandler }) => {
  const { updatePassword } = infoObj
  return (
    <div className="profile-section-container">
      <h5 className="profile-header">Update Login Credentials:</h5>
      <Divider />

      <div className="profile-label">
        <label className="profile-label">Current Password:</label>

        <label className="profile-label">New Password:</label>
      </div>
      <div className="profile-input-container">
        <input
          value={password}
          type="password"
          placeholder={password}
          className="profile-input"
        />

        <input
          value={updatePassword}
          type="password"
          onChange={e => stateInfoHandler('updatePassword', e.target.value)}
          className="profile-input"
        />
      </div>
      <Divider />
    </div>
  )
}

export default Credentials



