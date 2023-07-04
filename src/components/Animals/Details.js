import React from 'react'
import '../UI/Modal.css'

const Details = props => {
  const handleDetailsMessage = e => {
    if (e.target.id === 'detailsModalBackground') {
      console.log(e.target.id)
      props.setShowDetails(false)
    }
  }

  const closeDetails = () => {
    props.setShowDetails(false)
  }

  return (
    <div id="modalBackground" className="background" onClick={handleDetailsMessage}>
      <div className="modal">
        <div className="content">
          <button className="close" onClick={closeDetails}>
            X
          </button>
          {console.log("modal children:", props.children)}
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Details
