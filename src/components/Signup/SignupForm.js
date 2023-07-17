import React, { useRef, useState } from 'react'
import { Tabs } from 'antd'
import axios from 'axios'
import UseModal from '../UI/UseModal'
import { SignupTabs } from './SignupTabs'
import './Signup.css'
import { useDispatch, useSelector } from 'react-redux'
import { showModal, modalOptions } from '../../redux/slices/modalSlice'
import { useNavigate } from 'react-router-dom'
const { REACT_APP_BACKEND_URL } = process.env

const onChange = key => {
  console.log(key)
}

const SignupForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const refSubmit = useRef()
  const [signupObj, setSignupObj] = useState({
    newUsername: '',
    newPassword: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
  })
  let modal = useSelector(modalOptions)

  const signupModalHandler = () => {
    navigate('/login', { replace: true })
  }

  const signupStateHandler = (objectKeyName, value) => {
    setSignupObj({ ...signupObj, [objectKeyName]: value })
  }
  const createNewUser = e => {
    e.preventDefault()
    const {
      newUsername,
      newPassword,
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipcode
    } = signupObj
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
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        address,
        city,
        state,
        zipcode
      })
      .then(res => {
        console.log(res.data)
        refSubmit.current.removeAttribute('disabled')
        console.log('UpdateUserData:', { ...res.data.data })
        setSignupObj([{ ...res.data }])
        dispatch(showModal('signup'))
        let newSignupObj = { ...signupObj }
        Object.keys(signupObj).forEach(key => (signupObj[key] = ''))
        setSignupObj(newSignupObj)
        navigate('/', { replace: true })
      })
      .catch(err => {
        console.log('error on signup:', err)
        alert('Unable to add user. Please try again.')
      })
  }

  return (
    <div className="signup-container">
      <Tabs
        defaultActiveKey="1"
        items={SignupTabs(signupObj, signupStateHandler)}
        onChange={onChange}
      />
      {modal.signup ? (
        <UseModal>
          <span>Thank you for signing up! Please login to continue.</span>
          <button onClick={signupModalHandler}>Continue to Login</button>
        </UseModal>
      ) : null}
      <button type="submit" onClick={createNewUser} className="signup-btn">
        Save Changes
      </button>
    </div>
  )
}

export default SignupForm







