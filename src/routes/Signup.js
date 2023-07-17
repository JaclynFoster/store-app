import React from 'react'
import Layout from '../components/Layout/Layout'
import SignupForm from '../components/Signup/SignupForm'

const Signup = ({ createUser, setCreateUser }) => {
  return (
    <Layout>
      <div className="signup-flex-container">
        <SignupForm createUser={createUser} setCreateUser={setCreateUser} />
      </div>
    </Layout>
  )
}

export default Signup

