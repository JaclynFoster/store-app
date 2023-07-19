import React, { useContext, useState } from 'react'
import Layout from '../components/Layout/Layout'
import CartItems from '../components/Cart/CartItems'
import AuthContext from '../context/userContext'

const Cart = () => {
  const props = useContext(AuthContext)
  return (
    <Layout>
      <div className="cart-main-div">
      
      {!props.userObject.id ? <div>Please Login to continue</div> :
      <CartItems />
  }
      </div>
    </Layout>
  )
}

export default Cart

