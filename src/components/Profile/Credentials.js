import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Divider } from 'antd'
import './Profile.css'

const Credentials = () => {
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
          <input className="profile-input" />
        </Col>
        <Col>
          <input className="profile-input" />
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
          <input className="profile-input" />
        </Col>
        <Col>
          <input className="profile-input" />
        </Col>
      </Row>
      <Divider />
    </div>
  )
}

export default Credentials
