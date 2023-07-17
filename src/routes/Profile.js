import React from 'react'
import Layout from '../components/Layout/Layout'
import ProfileForm from '../components/Profile/ProfileForm'
import { useNavigate } from 'react-router-dom'
import { RollbackOutlined } from '@ant-design/icons'

const Profile = () => {
  const navigate = useNavigate()
  const returnHandler = () => {
    navigate('/', { replace: true })
  }
  return (
    <Layout>
      <button className="back-home" onClick={() => returnHandler()}>
        Back <RollbackOutlined />
      </button>
      <div className="profile-flex-container">
        <ProfileForm />
      </div>
    </Layout>
  )
}

export default Profile

