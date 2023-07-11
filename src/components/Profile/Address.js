import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Divider } from 'antd'
import './Profile.css'

const Address = () => {
  return (
    <div className="profile-section-container">
      <h5 className="profile-header">Update Billing Address:</h5>
      <Divider />
      <Row>
        <Col>
          <label className="profile-label">Street:</label>
        </Col>
        <Col>
          <label className="profile-label">City:</label>
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
          <label className="profile-label">State:</label>
        </Col>
        <Col>
          <label className="profile-label">Zip Code:</label>
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

export default Address
