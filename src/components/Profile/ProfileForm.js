import React, { useContext, useState } from 'react'
import { Tabs } from 'antd'
import axios from 'axios'
import Address from './Address'
import Personal from './Personal'
import Credentials from './Credentials'
import UseModal from '../UI/UseModal'
import AuthContext from '../../context/userContext'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { modalOptions, showModal } from '../../redux/slices/modalSlice'

const onChange = key => {
  console.log(key)
}

const items = [
  {
    key: '1',
    label: `Personal`,
    children: <Personal />
  },
  {
    key: '2',
    label: `Address`,
    children: <Address />
  },
  {
    key: '3',
    label: `Credentials`,
    children: <Credentials />
  }
]
const ProfileForm = ({ user }) => {
  const props = useContext(AuthContext)
  const dispatch = useDispatch()
  const modal = useSelector(modalOptions)
  const [updateUser, setUpdateUser] = useState({})
  const [newAddress, setNewAddress] = useState('')
  const [newCity, setNewCity] = useState('')
  const [newState, setNewState] = useState('')
  const [newZip, setNewZip] = useState('')
  const [updateUsername, setUpdateUsername] = useState('')
  const [updatePassword, setUpdatePassword] = useState('')
  const [newFirst, setNewFirst] = useState('')
  const [newLast, setNewLast] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const updateUserHandler = () => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/updateUser${id}`, {
        address: newAddress,
        city: newCity,
        state: newState,
        zipcode: newZip,
        username: updateUsername,
        password: updatePassword,
        first_name: newFirst,
        last_name: newLast,
        email: newEmail,
        phone: newPhone,
        id: userObject.id
      })
      .then(res => {
        console.log('UpdateUserData:', { ...res.data.data })
        props.setUserObject({ ...res.data.data })
        dispatch(showModal('profile'))
        // setNewAddress('')
        // setNewCity('')
        // setNewState('')
        // setNewZip('')
        // setUpdateUsername('')
        // setUpdatePassword('')
        // setNewFirst('')
        // setNewLast('')
        // setNewEmail('')
        // setNewPhone('')
      })
  }
  return (
    <div className="profile-container">
      <AuthContext.Provider value={{ id: user.id }}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        {modal.profile ? (
          <UseModal>
            <h2>Changes Confirmed. Your profile has been update.</h2>
          </UseModal>
        ) : null}
        <button onClick={updateUserHandler()} className="profile-btn">
          Save Changes
        </button>
      </AuthContext.Provider>
    </div>
  )
}

export default ProfileForm

