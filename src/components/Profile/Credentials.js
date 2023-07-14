import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Divider } from 'antd'
import './Profile.css'

const Credentials = ({ password, infoObj, stateInfoHandler }) => {
  const { updatePassword } = infoObj
  return (
    <div className="profile-section-container">
      <h5 className="profile-header">Update Login Credentials:</h5>
      <Divider />

      <Row>
        <Col>
          <label className="profile-label">Current Password:</label>
        </Col>
        <Col>
          <label className="profile-label">New Password:</label>
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            value={password}
            type="password"
            placeholder={password}
            className="profile-input"
          />
        </Col>
        <Col>
          <input
            value={updatePassword}
            onChange={e => stateInfoHandler('updatePassword', e.target.value)}
            className="profile-input"
          />
        </Col>
      </Row>
      <Divider />
    </div>
  )
}

export default Credentials


