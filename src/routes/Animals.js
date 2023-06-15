import React, { useEffect, useState } from 'react'
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
  const [animalType, setAnimalType] = useState([])
  const getTypes = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/animals/types`)
      .then(res => {
        setAnimalType(res.data)
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
    {animalType.map(animal => {
         return (
            <div className="card-container">
            <Card>
          <img className="main-img" src={animal.image}/>
          <Divider />
          <h2>{animal.type}</h2>
        </Card>
      </div>
         )
  })}
    
    </Layout>
  )
}

export default Animals



