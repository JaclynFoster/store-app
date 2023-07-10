import React from 'react'
import { closeModal } from '../../redux/slices/modalSlice'
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ModalFooter } from 'react-bootstrap'
import './Modal.css'

const UseModal = props => {
  const dispatch = useDispatch()

  const closeButton = () => {
    dispatch(closeModal())
  }

  return (
    <Modal show={true}>
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
