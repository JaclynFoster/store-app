import React from 'react'
import ducks from '../../images/ducks.jpeg'
import geese from '../../images/geese.jpg'
import chickens from '../../images/chickenCard.jpg'
import { Divider } from 'antd'
import Card from '../UI/Card'
import './AnimalCategoryCard.css'
import { useNavigate } from 'react-router-dom'

const AnimalCard = props => {
  const navigate = useNavigate()
  const duckHandler = () => {
    navigate('/ducks', {replace: true})
  }
  return (
    <div className="animal-card-container">
      <Card>
        <img onClick={() => duckHandler()}className="animal-img" src={ducks} />
        <Divider />
        <label>Ducks</label>
      </Card>
      <Card>
        <img className="animal-img" src={geese} />
        <Divider />
        <label>Geese</label>
      </Card>
      <Card>
        <img className="animal-img" src={chickens} />
        <Divider />
        <label>Chickens</label>
      </Card>
    </div>
  )
}

export default AnimalCard
