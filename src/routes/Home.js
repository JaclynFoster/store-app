import React from 'react'
import Layout from '../components/Layout/Layout'
import Card from '../components/UI/Card'
import Input from '../components/UI/Input'
import '../components/Home/Home.css'

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <Card className="welcome">
          <h1>Welcome to the Farm!</h1>
          <h4>Join our Mailing List for weekly specials, updates and more..</h4>
          <input type="email" placeholder="enter email..." />
          <button>Submit</button>
        </Card>
      </div>
    </Layout>
  )
}

export default Home

