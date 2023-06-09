import React from 'react'
import { BsSearch } from 'react-icons/bs'
import axios from 'axios'
import './Search.css'

const Search = ({ setSearchResult, searchText, setSearchText }) => {
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
      })
      .catch(err => {
        console.log('error on searchAnimals:', err)
      })
  }

  return (
    <div className="search-container">
      <BsSearch className="search-icon" />
      <input
        placeholder="Search for animal..."
        type="search"
        className="search-input"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <button className="search-btn" onClick={() => searchAnimals()}>
        Search
      </button>
    </div>
  )
}

export default Search

