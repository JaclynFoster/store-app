import React from 'react'
import { closeModal, modalOptions } from '../../redux/slices/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ModalFooter } from 'react-bootstrap'
import './Modal.css'
import { useLocation, useNavigate } from 'react-router-dom'

const UseModal = props => {
  const {pathname} = useLocation()
  const modal = useSelector(modalOptions)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const closeButton = () => {
    dispatch(closeModal())
  }

  const afterClose = () => {
    if (pathname === '/checkout') {
      navigate('/animals', {replace: true})
  } else if (pathname === '/signup') {
      navigate('/login', {replace: true})
  } else {
      navigate('/', {replace: true})
  }
  }
console.log("modal", modal)
  return (
    <Modal afterClose={afterClose} show={modal[props.modalName]}>
      <ModalHeader>
        <button className="close" onClick={closeButton}>
          X
        </button>
      </ModalHeader>
      <ModalBody>{props.children}</ModalBody>
      <ModalFooter>
        <button className="ok-btn" onClick={closeButton}>
          OK
        </button>
      </ModalFooter>
    </Modal>
  )
}

export default UseModal
