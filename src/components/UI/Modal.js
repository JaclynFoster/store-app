import React, { Fragment, useState } from 'react'
import { createPortal } from 'react-dom'
import '../UI/Modal.css'

const Modal = props => {
  const [showModal, setShowModal] = useState(false)

  const onClose = () => {
    setShowModal(false)
  }

  return (
    <Fragment>
      <div className="background" onClick={onClose}>
        <div className="modal">
          <div className="content">{props.children}</div>
        </div>
      </div>
    </Fragment>
  )
}


export default Modal

