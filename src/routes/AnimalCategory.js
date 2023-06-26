import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate, useParams } from 'react-router-dom' // to get id out of url
import axios from 'axios'
import AnimalCategoryCard from '../components/Animals/AnimalCategoryCard'
import { RollbackOutlined } from '@ant-design/icons'

const AnimalCategory = () => {
  const [animalType, setAnimalType] = useState([])
  const params = useParams()
  const navigate = useNavigate()
  const backHomeHandler = () => {
    navigate('/animals', { replace: true })
  }

  console.log('params', params)
  const getAllTypes = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/animals/${params.type}`)
      .then(res => {
        setAnimalType(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('error getTypes: ', err)
      })
  }

  useEffect(() => {
    getAllTypes()
  }, [])

  return (
    <Layout>
      <button className="back-home" onClick={() => backHomeHandler()}>
        Back <RollbackOutlined />
      </button>
      <AnimalCategoryCard
        animalType={animalType}
        setAnimalType={setAnimalType}
      />
    </Layout>
  )
}

export default AnimalCategory

