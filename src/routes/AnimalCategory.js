import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useParams } from 'react-router-dom'; //to get id out of url
import axios from 'axios'
import AnimalCategoryCard from '../components/Animals/AnimalCategoryCard'

const AnimalCategory = (props) => {
  const [animalType, setAnimalType] = useState([])
  const params = useParams()

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
      <AnimalCategoryCard animalType={animalType} setAnimalType={setAnimalType}/>
    </Layout>
  )
}

export default AnimalCategory

