import React from 'react'
import Card from '../UI/Card'
import { Divider } from 'antd'
import {
  PlusOutlined,
  MinusOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'
import './SPAGrid.css'

const SPAGrid = ({ animalBreed }) => {
  return (
    <div className="grid">
      {animalBreed.map(breed => {
        console.log('animalBreed: ', animalBreed)
        console.log('breed', breed)
        return (
          <Card>
            <label className="grid-label">{breed.breed_name}</label>
            <Divider />
            <img className="grid-img" src={breed.breed_image} />
            <span>Price: ${breed.price}.00</span>
            <Divider />
            <span>Qty:</span>
            <MinusOutlined className="icons" />
            <span>3</span>
            <PlusOutlined className="icons" />
            <button className="add-cart">
              Add to Cart <ShoppingCartOutlined className="icons" />
            </button>
            <button className="details">Details</button>
          </Card>
        )
      })}
    </div>
  )
}

export default SPAGrid


