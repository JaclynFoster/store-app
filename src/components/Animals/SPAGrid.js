import React, { useState } from 'react'
import './SPAGrid.css'
import SPAGridCard from './SPAGridCard'

const SPAGrid = ({ animalBreed, searchResults, setSearchResults }) => {
  return (
    <div className="grid">
      {animalBreed.map(breed => {
        console.log('animalBreed: ', animalBreed)
        console.log('breed', breed)
        return <SPAGridCard breed={breed} />
      })}
    </div>
  )
}

export default SPAGrid





