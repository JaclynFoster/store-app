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
      .catch(err => {
        alert('Credentials invalid. Please try again')
        console.log('error on login', err)
      })
  }

  return (
    <div>
      <form key={user.id} className="login-container" onSubmit={getUserLogin}>
        <AuthContext.Provider value={{ id: user.id }}>
          <h1 className="login-title">Login:</h1>
          <Divider />
          <div className="login-space">
            <input
              placeholder="Enter Username:..."
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="login-input"
            />

            <input
              placeholder="Enter Password:..."
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

        <h4>New User?</h4>
        <button onClick={() => onSignUpHandler()} className="login-btn">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default LoginForm




