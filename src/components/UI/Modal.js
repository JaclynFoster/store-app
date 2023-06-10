import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import "../UI/Modal.css"

const Background = props => {
  return <div className={background} onClick={props.onClose} />
}

const Overlay = props => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  )
}
const portal = document.getElementById('portal')
const Modal = props => {
  return (
    <Fragment>
      (createPortal(<Background onClose={props.onClose} />, portal))
      {createPortal(<Overlay>{props.children}</Overlay>, portal)}
    </Fragment>
  )
}

export default Modal

