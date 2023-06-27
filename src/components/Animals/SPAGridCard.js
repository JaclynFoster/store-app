import React, { useState } from 'react'
import Details from './Details'
import { Divider } from 'antd'
import {
  PlusOutlined,
  MinusOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'

const SPAGridCard = ({ breed }) => {
  const [showDetails, setShowDetails] = useState(false)

  const details = () => {
    setShowDetails(true)
  }
  return (
    <div className="grid-card">
      <label className="grid-label">{breed.breed_name}</label>
      <Divider />
      <img className="grid-img" src={breed.breed_image} />
      <div className="container-two">
        <span className="grid-span">Price: ${breed.price}.00</span>
        <span className="grid-span">Qty:</span>
        <MinusOutlined className="icons" />
        <span className="grid-span">3</span>
        <PlusOutlined className="icons" />
      </div>
      <Divider />

      <div className="grid-btns">
        <button className="add-cart">
          Add to Cart <ShoppingCartOutlined className="icons" />
        </button>
        {showDetails ? (
          <Details setShowDetails={setShowDetails}>
            <p>{breed.details}</p>
          </Details>
        ) : null}
        <button onClick={details} className="details">
          Details
        </button>
      </div>
    </div>
  )
}

export default SPAGridCard

