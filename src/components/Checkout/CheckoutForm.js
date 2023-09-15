import React, { useState } from 'react'
import Progress from './Progress'
import { Divider } from 'antd'
import { StepsTabs } from './StepsTabs'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeModal,
  modalOptions,
  showModal
} from '../../redux/slices/modalSlice'
import UseModal from '../UI/UseModal'
import Confirmation from './Confirmation'
import './CheckoutForm.css'
import { useNavigate } from 'react-router-dom'

const CheckoutForm = () => {
  const [checkoutObj, setCheckoutObj] = useState({
    checkoutFirst: '',
    checkoutLast: '',
    checkoutAddress: '',
    checkoutCity: '',
    checkoutState: '',
    checkoutZip: '',
    checkoutEmail: '',
    checkoutPhone: ''
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
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

  const checkoutModalHandler = () => {
    dispatch(closeModal('confirmation'))
    navigate('/animals', { replace: true })
  }

  const stateCheckoutHandler = (objectKeyName, value) => {
    setCheckoutObj({ ...checkoutObj, [objectKeyName]: value })
  }
  return (
    <div>
      <Progress
        StepsTabs={StepsTabs(checkoutObj, stateCheckoutHandler)}
        current={current}
        setCurrent={setCurrent}
        stateCheckoutHandler={stateCheckoutHandler}
        checkoutObj={checkoutObj}
        setCheckoutObj={setCheckoutObj}
      />
      <div className="progress-btn-container">
        {current > 0 && (
          <button className="progress-btn" onClick={() => prev()}>
            Previous
          </button>
        )}
        {current < StepsTabs(checkoutObj, stateCheckoutHandler).length - 1 && (
          <button className="progress-btn" onClick={() => next()}>
            Next
          </button>
        )}
        {modal.confirmation ? (
          <UseModal modalName={'confirmation'}>
            <div className="checkout-modal-container">
              <Confirmation />
              <Divider />
              <button
                onClick={checkoutModalHandler}
                className="checkout-confirm-btn"
              >
                Continue Shopping
              </button>
            </div>
          </UseModal>
        ) : null}
        {current ===
          StepsTabs(checkoutObj, stateCheckoutHandler).length - 1 && (
            <button className="progress-btn" onClick={() => sendConfirmation()}>
            Complete Order
            </button>
          )}
      </div>
    </div>
  )
}

export default CheckoutForm







