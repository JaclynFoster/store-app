import React from 'react'
import { IdcardOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import './Profile.css'

const Personal = ({ infoObj, stateInfoHandler }) => {
  const { newFirst, newLast, newEmail, newPhone } = infoObj

  return (
    <div className="profile-section-container">
      <div className="profile-header-container">
        <IdcardOutlined className="profile-icon" />
        <h5 className="profile-header">Update Personal Details:</h5>
      </div>
      <Divider />
      <div className="profile-label">
        <label className="profile-label">First Name:</label>
        <label className="profile-label">Last Name:</label>
      </div>
      <div className="profile-input-container">
        <input
          value={newFirst}
          onChange={e => stateInfoHandler('newFirst', e.target.value)}
          className="profile-input"
        />
        <input
          value={newLast}
          onChange={e => stateInfoHandler('newLast', e.target.value)}
          className="profile-input"
        />
      </div>
      <div className="profile-label">
        <label className="profile-label">Phone:</label>
        <label className="profile-label">Email:</label>
      </div>
      <div className="profile-input-container">
        <input
          value={newPhone}
          onChange={e => stateInfoHandler('newPhone', e.target.value)}
          className="profile-input"
        />
        <input
          value={newEmail}
          onChange={e => stateInfoHandler('newEmail', e.target.value)}
          className="profile-input"
        />
      </div>
      <Divider />
    </div>
  )
}

export default Personal



