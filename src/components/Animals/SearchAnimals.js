import React from 'react'
import Card from '../UI/Card'
import { Divider } from 'antd'
import { useNavigate } from 'react-router-dom'
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
