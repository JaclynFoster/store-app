import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import SPAGridCard from './SPAGridCard'
import Card from '../UI/Card'
import axios from 'axios'

const Search = ({
  setSearchResult,
  searchText,
  setSearchText
}) => {
  //   const [searchResult, setSearchResult] = useState([])

  const searchAnimals = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/animals/getSearch`, {
        params: {
          searchText: searchText
        }
      })
      .then(res => {
        console.log('searchAnimal Result:', ...res.data)
        setSearchResult([...res.data])
        // setSearchText('')
      })
      .catch(err => {
        console.log('error on searchAnimals:', err)
      })
  }

  return (
    <div className="search-container">
      <BsSearch className="search-icon" />
      <input
        placeholder="Search for Animal Breed..."
        type="search"
        className="search-input"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <button onClick={() => searchAnimals()}>Search</button>
    </div>
  )
}

export default Search
