import React from 'react'
import '../UI/Modal.css'

const EmailModal = props => {
  const handleMessage = e => {
    if (e.target.id === 'modalBackground') {
      console.log(e.target.id)
      props.setShowSuccess(false)
    }
  }

  const onClose = () => {
    props.setShowSuccess(false)
  }

  return (
    <div id="modalBackground" className="background" onClick={handleMessage}>
      <div className="modal">
        <div className="content">
          <button className="close" onClick={onClose}>
            X
          </button>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default EmailModal
