import React from 'react'
import { Divider } from 'antd'
import Card from '../UI/Card'
import './AnimalCategoryCard.css'
import { useNavigate } from 'react-router-dom'


const AnimalCategoryCard = ({ animalType, animal }) => {
  const navigate = useNavigate()
 return(
  <div>
   {animalType.map(type => {
     console.log('type:', type)
     return (
       <div className="animal-card-container">
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
      </div>
      )
    })}
    
    
    </div>
    )
}

export default AnimalCategoryCard

