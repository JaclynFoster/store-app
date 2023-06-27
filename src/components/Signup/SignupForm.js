import React, { useRef, useState } from 'react'
import { Divider } from 'antd'
import axios from 'axios'
import SignupModal from './SignupModal'
import '../UI/Modal.css'
import './Signup.css'
const { REACT_APP_BACKEND_URL } = process.env

const SignupForm = () => {
  const [showModal, setShowModal] = useState(false)
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

  const createNewUser = (e) => {
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
        setShowModal(true)
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
  }

  return (
    <form
      key={createUser.id}
      className="signup-container"
      onSubmit={createNewUser}
    >
      <h1>Signup:</h1>
      <Divider />
      <label className="signup-label">Create Username:</label>
      <input
        value={newUsername}
        onChange={e => setNewUsername(e.target.value)}
        className="signup-input"
        required
      />
      <label className="signup-label">Create Password:</label>
      <input
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        className="signup-input"
        type="password"
        required
      />
      <label className="signup-label">Email:</label>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="signup-input"
        type="email"
        required
      />
      <label className="signup-label">First Name:</label>
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        className="signup-input"
        required
      />
      <label className="signup-label">Last Name:</label>
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        className="signup-input"
        required
      />
      <label className="signup-label">Address:</label>
      <input
        value={address}
        onChange={e => setAddress(e.target.value)}
        className="signup-input"
      />
      <label className="signup-label">City:</label>
      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        className="signup-input"
      />
      <label className="signup-label">State:</label>
      <input
        value={state}
        onChange={e => setState(e.target.value)}
        className="signup-input"
      />
      <label className="signup-label">Zipcode:</label>
      <input
        value={zipcode}
        onChange={e => setZipcode(e.target.value)}
        className="signup-input"
      />
      <label className="signup-label">Phone:</label>
      <input
        value={phone}
        onChange={e => setPhone(e.target.value)}
        className="signup-input"
      />
      {showModal ? (
        <SignupModal setShowModal={setShowModal}>
          <span>Thank you for signing up! Please login to continue.</span>
        </SignupModal>
      ) : null}
      <button ref={refSubmit} className="signup-btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default SignupForm




