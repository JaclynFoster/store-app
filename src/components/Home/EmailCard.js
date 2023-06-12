import React from 'react'
import Card from '../UI/Card'
import './Home.css'

const EmailCard = () => {
  return (
    <Card className="welcome">
      <h1>Welcome to the Farm!</h1>
      <h4>Join our Mailing List for weekly specials, updates and more..</h4>
      <section className="email-section">
        <input
          className="email-input"
          type="email"
          placeholder="enter email..."
        />
        <button className="email-btn">Submit</button>
      </section>
    </Card>
  )
}

export default EmailCard
