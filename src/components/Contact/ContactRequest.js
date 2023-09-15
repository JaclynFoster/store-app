import React from 'react'
import { Input, Button } from 'antd'
import axios from 'axios'
import UseModal from '../UI/UseModal'
import { useDispatch, useSelector } from 'react-redux'
import { modalOptions, showModal } from '../../redux/slices/modalSlice'
import {
  contactOptions,
  contactStateHandler,
  contactResetHandler
} from '../../redux/slices/contactSlice'

const { TextArea } = Input

const ContactRequest = ({}) => {
  const dispatch = useDispatch()
  const modal = useSelector(modalOptions)
  const contact = useSelector(contactOptions)
  console.log('THE CONTACT: ', contact)
  const { contact_name, contact_email, contact_message } = contact
  console.log({ contact_name, contact_email, contact_message })
  const createRequest = e => {
    e.preventDefault()
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/contactRequest`, {
        contact_name,
        contact_email,
        contact_message
      })
      .then(res => {
        console.log('Create Contact:', { ...res.data })
        dispatch(showModal('contact'))
        dispatch(contactResetHandler())
      })
      .catch(err => {
        console.log('err on createRequest', err)
      })
  }

  const getValue = keyName => {
    return contact[keyName]
  }

  return (
    <div>
      <label className="contact-label">Name:</label>
      <Input
        value={getValue('contact_name')}
        onChange={e =>
          dispatch(
            contactStateHandler({
              objectKeyName: 'contact_name',
              value: e.target.value
            })
          )
        }
      />
      <label className="contact-label">Email:</label>
      <Input
        value={getValue('contact_email')}
        onChange={e =>
          dispatch(
            contactStateHandler({
              objectKeyName: 'contact_email',
              value: e.target.value
            })
          )
        }
      />
      <label className="contact-label">Leave us a Message:</label>
      <TextArea
        value={getValue('contact_message')}
        onChange={e =>
          dispatch(
            contactStateHandler({
              objectKeyName: 'contact_message',
              value: e.target.value
            })
          )
        }
        showCount
        maxLength={1000}
        rows={6}
      />
      {modal.contact ? (
        <UseModal modalName={'contact'}>
          <h5>
            Thank you for reaching out to us. A member of our team will be in
            contact with you shortly.
          </h5>
        </UseModal>
      ) : null}
      <div className="contact-btn-container">
        <Button
          className="contact-request-btn"
          onClick={createRequest}
          htmlType="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default ContactRequest

