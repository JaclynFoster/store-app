import React from 'react'
import Card from '../UI/Card'
import { Divider, Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import './Animals.css'

const AnimalsList = ({ animals }) => {
  const navigate = useNavigate()
  return (
    <div className="animal-list-div">
      {animals.map(animal => {
        return (
          <Card>
            <img
              onClick={() =>
                navigate(`/animals/${animal.type}`, { replace: true })
              }
              className="main-img"
              src={animal.image}
            />
            <Divider />
            <h2 className="animal-type">{animal.type}</h2>
          </Card>
        )
      })}
    </div>
  )
}

export default AnimalsList
