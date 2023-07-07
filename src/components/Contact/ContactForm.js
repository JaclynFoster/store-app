import { Form, Input, Button } from 'antd'
import React from 'react'
import Card from '../UI/Card'


import goosey from '../../images/goosey.jpeg'
import '../Contact/Contact.css'

const { TextArea } = Input

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <Card className="contact-card">
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
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" type="email">
            <Input />
          </Form.Item>
          <Form.Item label="Leave us a Message:">
            <TextArea name="textarea" rows={6} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default ContactForm


