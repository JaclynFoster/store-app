import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import CartItems from '../components/Cart/CartItems'

const Cart = () => {
  return (
    <Layout>
      <div className="cart-main-div">
        <CartItems />
      </div>
    </Layout>
  )
}

export default Cart

