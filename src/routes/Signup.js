import React from 'react'
import Layout from '../components/Layout/Layout'
import SignupForm from '../components/Signup/SignupForm'

const Signup = ({createUser, setCreateUser}) => {
  return (
   <Layout>
    <SignupForm createUser={createUser} setCreateUser={setCreateUser} />
   </Layout>
  )
}

export default Signup
