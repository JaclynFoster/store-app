import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Divider } from 'antd'
import './Profile.css'

const Address = () => {
  const [newStreet, setNewStreet] = useState('')
  const [newCity, setNewCity] = useState('')
  const [newState, setNewState] = useState('')
  const [newZip, setNewZip] = useState('')
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
          <input
            value={newStreet}
            onChange={e => setNewStreet(e.target.value)}
            className="profile-input"
          />
        </Col>
        <Col>
          <input
            value={newCity}
            onChange={e => setNewCity(e.target.value)}
            className="profile-input"
          />
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
          <input
            value={newState}
            onChange={e => setNewState(e.target.value)}
            className="profile-input"
          />
        </Col>
        <Col>
          <input
            value={newZip}
            onChange={e => setNewZip(e.target.value)}
            className="profile-input"
          />
        </Col>
      </Row>
      <Divider />
    </div>
  )
}

export default Address

