import React from 'react'
import './Modal.css'
import { useNavigate } from 'react-router-dom'

const Modal = props => {
  const navigate = useNavigate()
  const clickHandler = e => {
    if (e.target.id === 'modalBackground') {
      console.log(e.target.id)
      props.setShowModal(false)
      navigate(`/login`, {replace: true})
    }
  }

  return (
    <div id="modalBackground" className="background" onClick={clickHandler}>
      <div className="modal">
        <div className="content">{props.children}</div>
      </div>
    </div>
  )
}

export default Modal



