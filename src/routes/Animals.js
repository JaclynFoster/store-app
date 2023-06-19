import React, { useEffect, useState } from 'react'
import Card from '../components/UI/Card'
import axios from 'axios'
import BSF from '../images/BSF.jpg'
import chicken from '../images/chicken.jpg'
import reptiles from '../images/reptiles.jpg'
import Layout from '../components/Layout/Layout'
import { Divider } from 'antd'
import '../components/Animals/Animals.css'
import { useNavigate, useParams } from 'react-router-dom'

const Animals = () => {
  const [animal, setAnimal] = useState([])
  const params = useParams()
  const getAllAnimals = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/animals/all`)
      .then(res => {
        setAnimal(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('error getAllAnimals: ', err)
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
    getAllAnimals()
  }, [])
  return (
    <Layout>
    {animal.map(animal => {
         return (
            <div className="card-container">
            <Card>
      
          <img onClick={() => navigate(`/animals/types/?type=${params.type}`, {replace: true})}className="main-img" src={animal.image}/>
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



