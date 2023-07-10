import React, { useState } from 'react'
import Card from '../UI/Card'
import UseModal from '../UI/UseModal'
import { modalOptions, showModal } from '../../redux/slices/modalSlice'
import './EmailCard.css'
import { useDispatch, useSelector } from 'react-redux'

const EmailCard = () => {
  const dispatch = useDispatch()
  const modal = useSelector(modalOptions)
  const [emailInput, setEmailInput] = useState('')
  const modalHandler = () => {
    dispatch(showModal("email"))
    setEmailInput('')
  }
  return (
    <div className="welcome">

    <Card >
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
          <UseModal>
            <h2>
              Thank you for Joining our Mailing List. Check your email for our
              latest updates and deals.
            </h2>
            </UseModal>
         
         ) : null}
        <button onClick={modalHandler} className="email-btn">
          Submit
        </button>
      </section>
    </Card>
         </div>
  )
}

export default EmailCard

