import React from 'react'
import CollapseChildren from '../UI/CollapseChildren'
import './Customer.css'
import { Divider } from 'antd'
import { useNavigate } from 'react-router-dom'

const Customer = () => {
  const navigate = useNavigate()

  const signIn = () => {
    navigate('/login', { replace: true })
  }

  return (
    <CollapseChildren>
      <h1>Customer Details:</h1>
      <Divider />
      <div className="customer-container">
        <p className="guest-p">
          Checking out as a Guest? You'll be able to save your details to create
          an account with us later.
        </p>
        <label className="guest-label">Email Address:</label>
        <div className="guest-email">
          <input className="guest-input" type="email" />
          <button className="guest-btn">Continue as Guest</button>
        </div>
      </div>
      <span className="guest-span">
        Already have an account?{' '}
        <a onClick={signIn} className="signin-link">
          Sign in now
        </a>{' '}
      </span>
    </CollapseChildren>
  )
}

export default Customer


