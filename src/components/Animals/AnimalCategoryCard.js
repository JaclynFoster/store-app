import React from 'react'
import { Divider, Image } from 'antd'
import Card from '../UI/Card'
import './AnimalCategoryCard.css'
import { useNavigate } from 'react-router-dom'

const AnimalCategoryCard = ({ animalType, animal }) => {
  const navigate = useNavigate()
  return (
    <div className="animal-card-container">
      {animalType.map(type => {
        console.log('type:', type)
        return (
          <Card>
            <img
              onClick={() =>
                navigate(`/animals/${type.type}/${type.type_name}`)
              }
              className="animal-img"
              src={type.type_image}
            />
            <Divider />
            <label className="animal-label">{type.type_name}</label>
          </Card>
        )
      })}
    </div>
  )
}

export default AnimalCategoryCard


