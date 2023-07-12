import React, { useContext } from 'react'
import Layout from '../components/Layout/Layout'
import LoginForm from '../components/Login/LoginForm'
import AuthContext from '../context/userContext'


const Login = ({user, setUser}) => {
  const props = useContext(AuthContext)
  return (
   <Layout>
   
 

    <LoginForm user={user} setUser={setUser}/>
 
   </Layout>
  )
}

export default Login
