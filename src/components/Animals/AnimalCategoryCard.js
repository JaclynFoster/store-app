import React from 'react'
import ducks from '../../images/ducks.jpeg'
import geese from '../../images/geese.jpg'
import chickens from '../../images/chickenCard.jpg'
import { Divider } from 'antd'
import Card from '../UI/Card'
import './AnimalCategoryCard.css'
import { useNavigate } from 'react-router-dom'

const AnimalCategoryCard = ({animalType, animal}) => {

  const navigate = useNavigate()
  const duckHandler = () => {
    navigate('/ducks', {replace: true})
  }
  const geeseHandler = () => {
    navigate('/geese', {replace: true})
  }
  const chickenHandler = () => {
    navigate('/chickens', {replace: true})
  }
  return (
    <div className="animal-card-container">
      {animalType.map(type => {
        return (
          <Card>
          <img className="animal-img" src={type.type_id} />
          <Divider />
          <label>{type.type_name}</label>
        </Card>
        )
      })}
   
      {/* <Card>
        <img onClick={() => geeseHandler()}className="animal-img" src={geese} />
        <Divider />
        <label>Geese</label>
      </Card>
      <Card>
        <img onClick={() => chickenHandler()}className="animal-img" src={chickens} />
        <Divider />
        <label>Chickens</label>
      </Card> */}
    </div>
  )
}

export default AnimalCategoryCard
