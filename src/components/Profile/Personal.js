import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Divider } from 'antd'
import './Profile.css'

const Personal = () => {
  const [newFirst, setNewFirst] = useState('')
  const [newLast, setNewLast] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPhone, setNewPhone] = useState('')
  
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
          <input
            value={newFirst}
            onChange={e => setNewFirst(e.target.value)}
            className="profile-input"
          />
        </Col>
        <Col>
          <input
            value={newLast}
            onChange={e => setNewLast(e.target.value)}
            className="profile-input"
          />
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
          <input
            value={newPhone}
            onChange={e => setNewPhone(e.target.value)}
            className="profile-input"
          />
        </Col>
        <Col>
          <input
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
            className="profile-input"
          />
        </Col>
      </Row>

      <Divider />
    </div>
  )
}

export default Personal

