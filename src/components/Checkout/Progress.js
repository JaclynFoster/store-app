import React, { useContext, useEffect, useState } from 'react'
import { Steps } from 'antd'
import CartSummary from './CartSummary'
import './Progress.css'
import AuthContext from '../../context/userContext'

const Progress = ({ current, StepsTabs, setCheckoutObj }) => {
  const props = useContext(AuthContext)

  useEffect(() => {
    // ...map props to checkoutObj
    const initialState = {
      checkoutFirst: props.userObject.first_name,
      checkoutLast: props.userObject.last_name,
      checkoutAddress: props.userObject.address,
      checkoutCity: props.userObject.city,
      checkoutState: props.userObject.state,
      checkoutZip: props.userObject.zipcode,
      checkoutEmail: props.userObject.email,
      checkoutPhone: props.userObject.phone
    }
    setCheckoutObj(initialState)
  }, [])

  const items = StepsTabs.map(item => ({
    key: item.title,
    title: item.title,
    content: item.content
  }))

  return (
    <div className="steps-container">
      <Steps items={items} current={current} />
      <div className="checkout-flex">
        <CartSummary />
        <div className="step-content">{StepsTabs[current].content}</div>
      </div>
    </div>
  )
}

export default Progress





