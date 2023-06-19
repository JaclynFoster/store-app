import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import SPAGrid from '../components/Animals/SPAGrid'
import { RollbackOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import '../components/Animals/SinglePageAnimal.css'

const SinglePageAnimal = ({ animal }) => {
  const [animalBreed, setAnimalBreed] = useState([])
  const navigate = useNavigate()
  const params = useParams()
  const backHandler = () => {
    navigate(`/animals/${params.type}`, { replace: true })
  }
  console.log('params', params)
  const getAllBreeds = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/animals/${params.type}/${
          params.breed
        }`
      )
      .then(res => {
        setAnimalBreed(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('error getAllBreeds: ', err)
      })
  }
  useEffect(() => {
    getAllBreeds()
  }, [])
  return (
    <Layout>
      <button className="back-btn" onClick={() => backHandler()}>
        Back <RollbackOutlined />
      </button>

      <SPAGrid animalBreed={animalBreed} setAnimalBreed={setAnimalBreed} />
    </Layout>
  )
}

export default SinglePageAnimal
