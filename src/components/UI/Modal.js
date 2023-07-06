import React from 'react'
import { closeModal } from '../../redux/slices/modalSlice'
import { useDispatch } from 'react-redux'



const Modal = (props) => {
    const dispatch = useDispatch()
    const clickHandler = (e) => {
        if (e.target.id === 'modalBackground') {
            console.log(e.target.id)
           dispatch(closeModal())

          }

    }
const closeButton = () => {
    dispatch(closeModal())
}

    return (
        <div id="modalBackground" className="background" onClick={clickHandler}>
        <div className="modalBox">
          <div className="content">
            <button onClick={closeButton} className="close">X</button>
            {console.log("modal children:", props.children)}
            {props.children}
          </div>
        </div>
      </div>
    )
}

export default Modal