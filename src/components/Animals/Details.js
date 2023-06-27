import React from 'react'
import '../UI/Modal.css'

const Details = props => {
  const handleMessage = e => {
    if (e.target.id === 'modalBackground') {
      console.log(e.target.id)
      props.setShowDetails(false)
    }
  }

  const closeDetails = () => {
    props.setShowDetails(false)
  }

  return (
    <div id="modalBackground" className="background" onClick={handleMessage}>
      <div className="modal">
        <div className="content">
          <button className="close" onClick={closeDetails}>
            X
          </button>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Details
