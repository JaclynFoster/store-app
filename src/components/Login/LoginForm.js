import React, { useContext, useState } from 'react'
import { Divider } from 'antd'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import AuthContext from '../../context/userContext'
const { REACT_APP_BACKEND_URL } = process.env

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState({})
  const props = useContext(AuthContext)
  const navigate = useNavigate()

  const onSignUpHandler = () => {
    navigate('/signup', { replace: true })
  }

  const getUserLogin = e => {
    e.preventDefault()
    axios
      .get(`${REACT_APP_BACKEND_URL}/getUser`, {
        params: {
          username: username,
          password: password
        }
      })
      .then(res => {
        if (res.data.length < 1) {
          alert(
            'Username or Password combination is incorrect. Please try again'
          )
        } else {
          props.setUserObject({ ...res.data[0] })
          navigate('/', { replace: true })
        }
      })
  }

  return (
    <div>
    <form className="login-container" onSubmit={getUserLogin}>
      <AuthContext.Provider value={{ id: user.id }}>
        <div key={user.id}>
          <h1>Login:</h1>
          <Divider />
          <label className="login-label">Username:</label>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="login-input"
          />
          <label className="login-label">Password:</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="login-input"
            type="password"
          />
          <button className="login-btn" type="submit">
            Submit
          </button>
        </div>
      </AuthContext.Provider>
      <Divider />
    </form>
      <label className="login-label">New User:</label>
      <button onClick={() => onSignUpHandler()} className="login-btn">
        Sign Up
      </button>
    </div>
  )
}

export default LoginForm



