import React, { useRef, useState } from 'react'
import { Divider } from 'antd'
import axios from 'axios'
import Modal from '../UI/Modal'
import './Signup.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  showModal,
  closeModal,
  modalOptions
} from '../../redux/slices/modalSlice'
import { useNavigate } from 'react-router-dom'
import Card from '../UI/Card'
const { REACT_APP_BACKEND_URL } = process.env

const SignupForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const refSubmit = useRef()
  const [createUser, setCreateUser] = useState({})
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState(0)
  const [phone, setPhone] = useState(0)
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  let modal = useSelector(modalOptions)

  const signupModalHandler = () => {
    navigate('/login', { replace: true })
  }

  const createNewUser = e => {
    e.preventDefault()

    console.log(
      'first',
      firstName,
      'last',
      lastName,
      email,
      address,
      city,
      state,
      zipcode,
      phone,
      newUsername,
      newPassword
    )
    refSubmit.current.setAttribute('disabled', true)
    axios
      .post(`${REACT_APP_BACKEND_URL}/createUser`, {
        username: newUsername,
        password: newPassword,
        email,
        first_name: firstName,
        last_name: lastName,
        address,
        city,
        state,
        zipcode,
        phone
      })
      .then(res => {
        console.log(res.data)
        refSubmit.current.removeAttribute('disabled')
        setCreateUser([{ ...res.data }])
        dispatch(showModal('signup'))
        setFirstName('')
        setLastName('')
        setEmail('')
        setAddress('')
        setCity('')
        setState('')
        setZipcode(0)
        setPhone(0)
        setNewUsername('')
        setNewPassword('')
      })
      .catch(err => {
        console.log('error on signup:', err)
        alert('Unable to add user. Please try again.')
      })
  }

  return (
    <div className="center-signup-container">
      <form
        key={createUser.id}
        className="signup-container"
        onSubmit={createNewUser}
      >
        <h1 className="signup-header">Signup:</h1>
        <Divider />
        <div className="form-create-user">
          <input
            placeholder="Create Username..."
            value={newUsername}
            onChange={e => setNewUsername(e.target.value)}
            className="signup-input"
            required
          />

          <input
            placeholder="Create Password..."
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            className="signup-input"
            type="password"
            required
          />
        </div>

        <input
          placeholder="Email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="signup-input address-input"
          type="email"
          required
        />
        <div className="first-last">
          <input
            placeholder="First Name:..."
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className="signup-input"
            required
          />

          <input
            placeholder="Last Name:..."
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className="signup-input"
            required
          />
        </div>

        <input
          placeholder="Address:..."
          value={address}
          onChange={e => setAddress(e.target.value)}
          className="signup-input address-input"
        />
        <div className="city-state-zip-input">
          <input
            placeholder="City:..."
            value={city}
            onChange={e => setCity(e.target.value)}
            className="signup-input city"
          />

          <input
            placeholder="State:..."
            value={state}
            onChange={e => setState(e.target.value)}
            className="signup-input state"
          />

          <input
            placeholder="Zip Code:..."
            value={zipcode}
            onChange={e => setZipcode(e.target.value)}
            className="signup-input zip"
          />
        </div>

        <input
          placeholder="Phone:..."
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="signup-input phone-input"
        />
        {modal.signup ? (
          <Modal>
            <span>Thank you for signing up! Please login to continue.</span>
            <button onClick={signupModalHandler}>Continue to Login</button>
          </Modal>
        ) : null}
        <button ref={refSubmit} className="signup-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignupForm





