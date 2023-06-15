import React, { useEffect } from 'react'
import Card from '../components/UI/Card'
import axios from 'axios'
import BSF from '../images/BSF.jpg'
import chicken from '../images/chicken.jpg'
import reptiles from '../images/reptiles.jpg'
import Layout from '../components/Layout/Layout'
import { Divider } from 'antd'
import '../components/Animals/Animals.css'
import { useNavigate } from 'react-router-dom'

const Animals = () => {
  const getTypes = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/animals/types`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log('error getTypes: ', err)
      })
  }
  const navigate = useNavigate()
  const fowlHandler = () => {
    navigate('/fowl', { replace: true })
  }
  const reptileHandler = () => {
    navigate('/reptiles', { replace: true })
  }
  const bugHandler = () => {
    navigate('/bugs', { replace: true })
  }

  useEffect(() => {
    getTypes()
  }, [])
  return (
    <Layout>
      <div className="card-container">
        <Card>
          <img onClick={() => fowlHandler()} className="main-img" />
          <Divider />
          <h2>Fowl</h2>
        </Card>
        <Card>
          <img onClick={() => reptileHandler()} className="main-img" />
          <Divider />
          <h2>Reptiles</h2>
        </Card>
        <Card>
          <img onClick={() => bugHandler()} className="main-img" />
          <Divider />
          <h2>Bugs</h2>
        </Card>
      </div>
    </Layout>
  )
}

export default Animals



