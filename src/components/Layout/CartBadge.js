import React from 'react'
import './CartBadge.css'
import { useSelector } from 'react-redux'

const CartBadge = () => {
  const cart = useSelector(state => state.cart.cart)
  const badgeCount = () => {
    return Object.values(cart).reduce((acc, curr) => {
      return (acc += curr.quantity || 0)
    }, 0)
  }
  console.log('cartBadge:', cart)
  console.log('badgeCount:', badgeCount())
  return (
    <div>
      <span className="number">{badgeCount()}</span>
    </div>
  )
}

export default CartBadge
