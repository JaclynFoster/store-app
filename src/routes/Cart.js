import React, { useContext, useState } from 'react'
import Layout from '../components/Layout/Layout'
import CartItems from '../components/Cart/CartItems'
import AuthContext from '../context/userContext'
import FeaturedProducts from '../components/Cart/FeaturedProducts'
import '../components/Cart/Cart.css'

const Cart = () => {
  const props = useContext(AuthContext)
  return (
    <Layout>
      <div className="cart-main-div">
        {!props.userObject.id ? (
          <div className="redirect">
            <h1>Please Login to view Cart</h1>
            <h3>In the meantime, check out our current deals:</h3>
            <div className="redirect-deals">
              <FeaturedProducts />
            </div>
          </div>
        ) : (
          <CartItems />
        )}
      </div>
    </Layout>
  )
}

export default Cart



