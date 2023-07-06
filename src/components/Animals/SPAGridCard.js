import React, { useState } from 'react'
import Modal from '../UI/Modal'
import { Divider } from 'antd'
import {
  PlusOutlined,
  MinusOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'
import {useSelector, useDispatch} from 'react-redux'
import { changeQuantity } from '../../redux/slices/cartItemSlice'
import { modalOptions, showModal } from '../../redux/slices/modalSlice'

const SPAGridCard = ({ breed }) => {

  const count = useSelector((state) => state.cart.value)
  const modal = useSelector(modalOptions)
  const dispatch = useDispatch()

  const details = () => {
    console.log("details", breed.details)
   dispatch(showModal(`breed-${breed.breed_id}`))
  }
  return (
    <div className="grid-card">
      <label className="grid-label">{breed.breed_name}</label>
      <Divider />
      <img className="grid-img" src={breed.breed_image} />
      <div className="container-two">
        <span className="grid-span">Price: ${breed.price}.00</span>
        <span className="grid-span">Qty:</span>
        <MinusOutlined onClick={() => dispatch(changeQuantity({id: breed.id, quantity: -1}))} className="icons" />
        <span className="grid-span">3</span>
        <PlusOutlined onClick={() => dispatch(changeQuantity({id: breed.id, quantity: 1}))} className="icons" />
      </div>
      <Divider />

      <div className="grid-btns">
        <button className="add-cart">
          Add to Cart <ShoppingCartOutlined className="icons" />
        </button>
        {modal[`breed-${breed.breed_id}`] ? (
          <Modal>
            <p>{breed.details}</p>
          </Modal>
        ) : null}
        <button onClick={details} className="details">
          Details
        </button>
      </div>
    </div>
  )
}

export default SPAGridCard

