import React from 'react'
import { Tabs } from 'antd'
import Address from './Address'
import Personal from './Personal'
import Credentials from './Credentials'
import './Profile.css'

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
const ProfileForm = () => {
  return (
  
      <div className="profile-container">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

        <button className="profile-btn">Save Changes</button>
      </div>
 
  )
}

export default ProfileForm
