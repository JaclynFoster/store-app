import React, { useEffect, useState } from 'react'
import Card from '../components/UI/Card'
import axios from 'axios'
import Layout from '../components/Layout/Layout'
import { Divider } from 'antd'
import '../components/Animals/Animals.css'
import { useNavigate, useParams } from 'react-router-dom'
import { setLoadingTrue, setLoadingFalse } from '../redux/slices/isLoadingSlice'
import { useDispatch } from 'react-redux'

const Animals = () => {
  const dispatch = useDispatch()
  const [animal, setAnimal] = useState([])
  const params = useParams()
  const getAllAnimals = () => {
    dispatch(setLoadingTrue())
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/animals/all`)
      .then(res => {
        setAnimal(res.data)
        dispatch(setLoadingFalse())
        console.log(res.data)
      })
      .catch(err => {
        console.log('error getAllAnimals: ', err)
      })
  }
  const navigate = useNavigate()

  useEffect(() => {
    getAllAnimals()
  }, [])
  return (
    <Layout>
      {animal.map(animal => {
        return (
          <div className="card-container">
            <Card>
              <img
                onClick={() =>
                  navigate(`/animals/${animal.type}`, { replace: true })
                }
                className="main-img"
                src={animal.image}
              />
              <Divider />
              <h2 className="animal-type">{animal.type}</h2>
            </Card>
          </div>
        )
      })}
    </Layout>
  )
}

export default Animals





