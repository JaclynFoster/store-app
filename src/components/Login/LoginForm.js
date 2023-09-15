import React, { useContext, useState } from 'react'
import { Divider } from 'antd'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import AuthContext from '../../context/userContext'
import {
  setLoadingTrue,
  setLoadingFalse
} from '../../redux/slices/isLoadingSlice'
import { useDispatch } from 'react-redux'
const { REACT_APP_BACKEND_URL } = process.env

const LoginForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState({})
  const props = useContext(AuthContext)
  const navigate = useNavigate()
  console.log('Context Props:', props)
  const onSignUpHandler = () => {
    navigate('/signup', { replace: true })
  }

  const getUserLogin = e => {
    dispatch(setLoadingTrue())
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
          console.log('UserData:', { ...res.data.data })
          props.setUserObject({ ...res.data.data })
          dispatch(setLoadingFalse())
          navigate('/', { replace: true })
        }
      })
      .catch(err => {
        alert('Credentials invalid. Please try again')
        dispatch(setLoadingFalse())
        console.log('error on login', err)
      })
  }
  return (
    <div className="login-container">
      <AuthContext.Provider value={{ id: user.id }}>
        <form className="login-form" key={user.id} onSubmit={getUserLogin}>
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
          <Divider />
        </form>
      </AuthContext.Provider>
      <div className="signup-section">
        <h4>New User?</h4>
        <button onClick={() => onSignUpHandler()} className="login-signup-btn">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default LoginForm






