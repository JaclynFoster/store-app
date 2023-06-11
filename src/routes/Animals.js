import React from 'react'
import Card from '../components/UI/Card'
import BSF from '../images/BSF.jpg'
import chicken from '../images/chicken.jpg'
import reptiles from '../images/reptiles.jpg'
import Layout from '../components/Layout/Layout'
import { Divider } from 'antd'
import '../components/Animals/Animals.css'

const Animals = () => {
  return (
    <Layout>
      <div className="card-container">
        <Card>
          <img className="main-img" src={chicken} />
          <Divider />
          <h2>Fowl</h2>
        </Card>
        <Card>
          <img className="main-img" src={reptiles} />
          <Divider />
          <h2>Reptiles</h2>
        </Card>
        <Card>
          <img className="main-img" src={BSF} />
          <Divider />
          <h2>Bugs</h2>
        </Card>
      </div>
    </Layout>
  )
}

export default Animals

