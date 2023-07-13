import { Form, Input, Button } from 'antd'
import React, { useState } from 'react'
import Card from '../UI/Card'
import UseModal from '../UI/UseModal'
import goosey from '../../images/goosey.jpeg'
import '../Contact/Contact.css'
import { useDispatch, useSelector } from 'react-redux'
import { modalOptions, showModal } from '../../redux/slices/modalSlice'

const { TextArea } = Input

const ContactForm = () => {
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactText, setContactText] = useState('')
  const dispatch = useDispatch()
  const modal = useSelector(modalOptions)

  const contactModal = () => {
    dispatch(showModal('contact'))
    setContactName('')
    setContactEmail('')
    setContactText('')
  }

  return (
    <div className="contact-form-container">
      <Card overrideClass={"contact-form-card"}>
        <div className="contact-img">
          <img className="duckies" src={goosey} />
          <div className="headers">
            <h2>We Want to Hear From You!</h2>
            <p>
              Leave us any feedback, questions, comments or concerns below and
              we will contact you soon.
            </p>
          </div>
        </div>

        <Form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className="form"
          name="basic"
          autoComplete="off"
        >
          <Form.Item label="Name" name="name">
            <Input
              value={contactName}
              onChange={e => setContactName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Email" name="email" type="email">
            <Input
              value={contactEmail}
              onChange={e => setContactEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Leave us a Message:">
            <TextArea
              value={contactText}
              onChange={e => setContactText(e.target.value)}
              name="textarea"
              rows={6}
            />
          </Form.Item>
          {modal.contact ? (
            <UseModal>
              <h5>
                Thank you for reaching out to us. A member of our team will be
                in contact with you shortly.
              </h5>
            </UseModal>
          ) : null}
          <Form.Item>
            <Button onClick={contactModal} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default ContactForm



