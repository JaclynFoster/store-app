import React from 'react'
import UseModal from '../UI/UseModal'
import { Divider, Image } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartItemSlice'
import { modalOptions, showModal } from '../../redux/slices/modalSlice'
import './SPAGrid.css'

const SPAGridCard = ({ breed }) => {
  const count = useSelector(state => state.cart.value)
  const modal = useSelector(modalOptions)
  const dispatch = useDispatch()
  const cartHandler = () => {
    dispatch(
      addToCart({
        quantity: 1,
        breedObj: breed
      })
    )
  }
  const details = () => {
    console.log('details', breed.details)
    dispatch(showModal(`breed-${breed.breed_id}`))
  }
  return (
    <div className="grid-card">
      <div className="grid">
        <label className="grid-label">{breed.breed_name}</label>
        <Divider />
        <Image
          height={250}
          width={300}
          className="grid-img"
          src={breed.breed_image}
        />
        <div className="container-two">
          <span className="grid-span">Price: ${breed.price}.00</span>
        </div>
        <Divider />
        <div className="grid-btns">
          <button onClick={cartHandler} className="add-cart">
            Add to Cart <ShoppingCartOutlined className="icons" />
          </button>
            <UseModal modalName={`breed-${breed.breed_id}`}>
              <p>{breed.details}</p>
            </UseModal>
          <button onClick={details} className="details">
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default SPAGridCard





