import React from 'react'
import '../UI/Modal.css'
import { useNavigate } from 'react-router-dom'

const SignupModal = props => {
  const navigate = useNavigate()
  const clickHandler = e => {
    if (e.target.id === 'modalBackground') {
      console.log(e.target.id)
      props.setShowModal(false)
      navigate(`/login`, { replace: true })
    }
  }

  const closeButton = () => {
    props.setShowModal(false)
  }

  return (
    <div id="modalBackground" className="background" onClick={clickHandler}>
      <div className="modal">
        <div className="content">
          <button onClick={closeButton} className="close">X</button>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default SignupModal




