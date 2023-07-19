import React, { useState } from 'react'
import { Steps } from 'antd'
import Customer from './Customer'
import Shipping from './Shipping'
import Payment from './Payment'
import Summary from './Summary'
import Confirmation from './Confirmation'
import UseModal from '../UI/UseModal'
import CartSummary from './CartSummary'
import './Progress.css'
import { useDispatch, useSelector } from 'react-redux'
import { modalOptions, showModal } from '../../redux/slices/modalSlice'

const steps = [
  {
    title: 'Billing',
    content: <Customer />
  },
  {
    title: 'Shipping',
    content: <Shipping />
  },

  {
    title: 'Payment',
    content: <Payment />
  },
  {
    title: 'Order Summary',
    content: <Summary />
  }
]
const Progress = () => {
  const dispatch = useDispatch()
  const modal = useSelector(modalOptions)
  // const {token} = theme.useToken()
  const [current, setCurrent] = useState(0)
  const next = () => {
    setCurrent(current + 1)
  }
  const prev = () => {
    setCurrent(current - 1)
  }
  const sendConfirmation = () => {
    dispatch(showModal('confirmation'))
  }
  const items = steps.map(item => ({
    key: item.title,
    title: item.title,
    content: item.content
  }))

  return (
    <div className="steps-container">
      <Steps items={items} current={current} />
      <div className="checkout-flex">
        <CartSummary />
        <div className="step-content">{steps[current].content}</div>
      </div>
      <div className="progress-btn-container">
        {current < steps.length - 1 && (
          <button className="progress-btn" onClick={() => next()}>
            Next
          </button>
        )}
        {modal.confirmation ? (
          <UseModal>
            <Confirmation />
          </UseModal>
        ) : null}

        {current === steps.length - 1 && (
          <button className="progress-btn" onClick={() => sendConfirmation()}>
            Complete Order
          </button>
        )}

        {current > 0 && (
          <button className="progress-btn" onClick={() => prev()}>
            Previous
          </button>
        )}
      </div>
    </div>
  )
}

export default Progress



