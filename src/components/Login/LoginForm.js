import React from 'react'
import './Login.css'
import { Divider } from 'antd'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const onSignUpHandler = () => {
    navigate('/signup', { replace: true })
  }

  return (
    <form className="login-container">
      <h1>Login:</h1>
      <Divider />
      <label className="login-label">Username:</label>
      <input className="login-input" />
      <label className="login-label">Password:</label>
      <input className="login-input" type="password" />
      <button className="login-btn" type="submit">
        Submit
      </button>
      <Divider />
      <label className="login-label">New User:</label>
      <button onClick={() => onSignUpHandler()} className="login-btn">
        Sign Up
      </button>
    </form>
  )
}

export default LoginForm


