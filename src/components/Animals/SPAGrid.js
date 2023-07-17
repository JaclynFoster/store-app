import React, { useState } from 'react'
import './SPAGrid.css'
import SPAGridCard from './SPAGridCard'

const SPAGrid = ({ animalBreed}) => {
  return (
    <div className="grid-container">
      {animalBreed.map(breed => {
        console.log('animalBreed: ', animalBreed)
        console.log('breed', breed)
        return <SPAGridCard breed={breed} />
      })}
    </div>
  )
}

export default SPAGrid





