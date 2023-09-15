import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import SPAGrid from '../components/Animals/SPAGrid'
import { RollbackOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { setLoadingTrue, setLoadingFalse } from '../redux/slices/isLoadingSlice'

import '../components/Animals/SinglePageAnimal.css'
import { useDispatch } from 'react-redux'

const SinglePageAnimal = ({ animal }) => {
  const dispatch = useDispatch()
  const [animalBreed, setAnimalBreed] = useState([])
  const navigate = useNavigate()
  const params = useParams()
  const backHandler = () => {
    navigate(`/animals/${params.type}`, { replace: true })
  }
  console.log('params', params)
  const getAllBreeds = () => {
    dispatch(setLoadingTrue())
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/animals/${params.type}/${
          params.breed
        }`
      )
      .then(res => {
        setAnimalBreed(res.data)
        dispatch(setLoadingFalse())
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


