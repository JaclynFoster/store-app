import React from 'react'
import SPAGridCard from './SPAGridCard'

const SearchAnimals = ({ animals }) => {
  return (
    <div className="animal-list-div">
      {animals.map(animal => {
        return <SPAGridCard breed={animal} />
      })}
    </div>
  )
}

export default SearchAnimals

