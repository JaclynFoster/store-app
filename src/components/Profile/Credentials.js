import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Divider } from 'antd'
import './Profile.css'

const Credentials = ({ username, password, setUsername, setPassword, updateUsername, setUpdateUsername, updatePassword, setUpdatePassword }) => {
   
  return (
    <div className="profile-section-container">
      <h5 className="profile-header">Update Login Credentials:</h5>
      <Divider />
      <Row>
        <Col>
          <label className="profile-label">Current Username:</label>
        </Col>
        <Col>
          <label className="profile-label">New Username:</label>
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="profile-input"
          />
        </Col>
        <Col>
          <input
            value={updateUsername}
            onChange={e => setUpdateUsername(e.target.value)}
            className="profile-input"
          />
        </Col>
      </Row>
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
            onChange={e => setPassword(e.target.value)}
            className="profile-input"
          />
        </Col>
        <Col>
          <input
            value={updatePassword}
            onChange={e => setUpdatePassword(e.target.value)}
            className="profile-input"
          />
        </Col>
      </Row>
      <Divider />
    </div>
  )
}

export default Credentials

