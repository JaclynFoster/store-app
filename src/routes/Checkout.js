import React from 'react'
import Layout from '../components/Layout/Layout'
import CheckoutForm from '../components/Checkout/CheckoutForm'
import { useNavigate } from 'react-router-dom'
import { RollbackOutlined } from '@ant-design/icons'

const Checkout = () => {
  const navigate = useNavigate()
  const returnToCart = () => {
    navigate('/cart', {replace: true})
  }
  return (
    <Layout>
      <button className="back-home" onClick={() => returnToCart()}>
        Back <RollbackOutlined />
      </button>
      

      <CheckoutForm />

      
    </Layout>
  )
}

export default Checkout
