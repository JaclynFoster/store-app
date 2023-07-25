import React, { useEffect, useState } from 'react'
import Card from '../components/UI/Card'
import axios from 'axios'
import Layout from '../components/Layout/Layout'
import Search from '../components/Animals/Search'
import '../components/Animals/Animals.css'
import { setLoadingTrue, setLoadingFalse } from '../redux/slices/isLoadingSlice'
import { useDispatch } from 'react-redux'
import AnimalsList from '../components/Animals/AnimalsList'
import SearchAnimals from '../components/Animals/SearchAnimals'

const Animals = ({}) => {
  const dispatch = useDispatch()
  const [animals, setAnimal] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchText, setSearchText] = useState('')

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

  useEffect(() => {
    getAllAnimals()
  }, [])

  console.log({ searchText })
  console.log({ searchResult })
  console.log('the condition: ', searchResult.length && searchText)
  return (
    <Layout>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      <div className="animal-card-container">
        {searchResult.length && searchText ? (
          <SearchAnimals animals={searchResult} />
        ) : (
          <AnimalsList animals={animals} />
        )}
      </div>
    </Layout>
  )
}

export default Animals

