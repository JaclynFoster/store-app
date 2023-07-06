import React, { useState } from 'react'
import Card from '../UI/Card'
import EmailModal from './EmailModal'
import Modal from '../UI/Modal'
import { modalOptions, showModal } from '../../redux/slices/modalSlice'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'

const EmailCard = () => {
  const dispatch = useDispatch()
  const modal = useSelector(modalOptions)
  const [emailInput, setEmailInput] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const modalHandler = () => {
    dispatch(showModal("email"))
    setEmailInput('')
  }
  return (
    <Card className="welcome">
      <h1>Welcome to the Farm!</h1>
      <h4>Join our Mailing List for weekly specials, updates and more..</h4>
      <section className="email-section">
        <input
          value={emailInput}
          onChange={e => setEmailInput(e.target.value)}
          className="email-input"
          type="email"
          placeholder="enter email..."
        />
        {modal.email ? (
          <Modal>
            <h2>
              Thank you for Joining our Mailing List. Check your email for our
              latest updates and deals.
            </h2>
            </Modal>
         
        ) : null}
        <button onClick={modalHandler} className="email-btn">
          Submit
        </button>
      </section>
    </Card>
  )
}

export default EmailCard

