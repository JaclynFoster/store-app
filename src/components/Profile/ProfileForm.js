import React, { useContext, useEffect, useState } from 'react'
import { Tabs } from 'antd'
import axios from 'axios'
import UseModal from '../UI/UseModal'
import AuthContext from '../../context/userContext'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { modalOptions, showModal } from '../../redux/slices/modalSlice'
import { ProfileTabs } from './ProfileTabs'
import { useNavigate } from 'react-router-dom'

const onChange = key => {
  console.log(key)
}

const ProfileForm = ({ user }) => {
  const props = useContext(AuthContext)
  const dispatch = useDispatch()
  const modal = useSelector(modalOptions)
  const navigate = useNavigate()
  const [infoObj, setInfoObj] = useState({
    newAddress: '',
    newCity: '',
    newState: '',
    newZip: '',
    updatePassword: '',
    newFirst: '',
    newLast: '',
    newEmail: '',
    newPhone: ''
  })
  console.log('Props ', props)
  useEffect(() => {
    // ...map props to infoObj
    const initialState = {
      newAddress: props.userObject.address,
      newCity: props.userObject.city,
      newState: props.userObject.state,
      newZip: props.userObject.zipcode,
      updatePassword: props.userObject.password,
      newFirst: props.userObject.first_name,
      newLast: props.userObject.last_name,
      newEmail: props.userObject.email,
      newPhone: props.userObject.phone
    }
    setInfoObj(initialState)
  }, [])

  const stateInfoHandler = (objectKeyName, value) => {
    setInfoObj({ ...infoObj, [objectKeyName]: value })
  }

  const updateUserHandler = () => {
    const {
      newAddress,
      newCity,
      newState,
      newZip,
      updatePassword,
      newFirst,
      newLast,
      newEmail,
      newPhone
    } = infoObj
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/updateUser${props.userObject.id}`,
        {
          address: newAddress,
          city: newCity,
          state: newState,
          zipcode: newZip,
          password: updatePassword,
          first_name: newFirst,
          last_name: newLast,
          email: newEmail,
          phone: newPhone,
          id: props.userObject.id
        }
      )
      .then(res => {
        console.log('UpdateUserData:', { ...res.data.data })
        props.setUserObject({ ...res.data.data })
        dispatch(showModal('profile'))

        let newObj = { ...infoObj }
        Object.keys(infoObj).forEach(key => (newObj[key] = ''))
        setInfoObj(newObj)
        navigate('/', {replace: true})
      })
  }
  return (
    <div className="profile-container">
      <Tabs
        defaultActiveKey="1"
        items={ProfileTabs(infoObj, stateInfoHandler)}
        onChange={onChange}
      />
      {modal.profile ? (
        <UseModal>
          <h2>Changes Confirmed. Your profile has been updated.</h2>
        </UseModal>
      ) : null}
      <button onClick={updateUserHandler} className="profile-btn">
        Save Changes
      </button>
    </div>
  )
}

export default ProfileForm


