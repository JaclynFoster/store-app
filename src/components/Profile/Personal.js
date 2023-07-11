import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Divider } from 'antd'
import './Profile.css'

const Personal = () => {
  return (
    <div className="profile-section-container">
      <h5 className="profile-header">Update Personal Details:</h5>
      <Divider />
      <Row>
        <Col>
          <label className="profile-label">First Name:</label>
        </Col>
        <Col>
          <label className="profile-label">Last Name:</label>
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
          <label className="profile-label">Phone:</label>
        </Col>
        <Col>
          <label className="profile-label">Email:</label>
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

export default Personal
