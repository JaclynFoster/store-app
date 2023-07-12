import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Divider } from 'antd'
import './Profile.css'

const Credentials = ({ username, password, setUsername, setPassword }) => {
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
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
            value={newUsername}
            onChange={e => setNewUsername(e.target.value)}
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
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            className="profile-input"
          />
        </Col>
      </Row>
      <Divider />
    </div>
  )
}

export default Credentials

