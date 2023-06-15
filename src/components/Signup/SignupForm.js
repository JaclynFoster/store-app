import React from 'react'
import { Divider } from 'antd'
import './Signup.css'

const SignupForm = () => {
  return (
    <form className="signup-container">
      <h1>Signup:</h1>
      <Divider />
      <label className="signup-label">First Name:</label>
      <input className="signup-input" required/>
      <label className="signup-label">Last Name:</label>
      <input className="signup-input" required/>
      <label className="signup-label">Email:</label>
      <input className="signup-input" type="email" required/>
      <label className="signup-label">Address:</label>
      <input className="signup-input" />
      <label className="signup-label">City:</label>
      <input className="signup-input" />
      <label className="signup-label">State:</label>
      <input className="signup-input" />
      <label className="signup-label">Zipcode:</label>
      <input className="signup-input" />
      <label className="signup-label">Phone:</label>
      <input className="signup-input" />
      <label className="signup-label">Create Username:</label>
      <input className="signup-input" required/>
      <label className="signup-label">Create Password:</label>
      <input className="signup-input" type="password" required/>
      <button className="signup-btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default SignupForm


