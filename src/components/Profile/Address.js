import React from 'react'
import { Divider } from 'antd'
import './Profile.css'

const Address = ({ infoObj, stateInfoHandler }) => {
  const { newAddress, newCity, newState, newZip } = infoObj
  return (
    <div className="profile-section-container">
      <h5 className="profile-header">Update Billing Address:</h5>
      <Divider />

      <div className="profile-label">
        <label className="profile-label">Street:</label>

        <label className="profile-label">City:</label>
      </div>
      <div className="profile-input-container">
        <input
          value={newAddress}
          onChange={e => stateInfoHandler('newAddress', e.target.value)}
          className="profile-input"
        />

        <input
          value={newCity}
          onChange={e => stateInfoHandler('newCity', e.target.value)}
          className="profile-input"
        />
      </div>

      <div className="profile-label">
        <label className="profile-label">State:</label>

        <label className="profile-label">Zip Code:</label>
      </div>
      <div className="profile-input-container">
        <input
          value={newState}
          onChange={e => stateInfoHandler('newState', e.target.value)}
          className="profile-input"
        />

        <input
          value={newZip}
          onChange={e => stateInfoHandler('newZip', e.target.value)}
          className="profile-input"
        />
      </div>

      <Divider />
    </div>
  )
}

export default Address



