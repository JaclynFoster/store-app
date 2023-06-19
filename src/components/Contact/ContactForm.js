import { Form, Input, Button } from 'antd'
import React from 'react'
import Card from '../UI/Card'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import tiktok from '../../images/tiktok.png'
import goosey from '../../images/goosey.jpeg'
import '../Contact/Contact.css'

const { TextArea } = Input

const ContactForm = () => {
  return (
    <div>
      <Card className="contact-card">
        <img className="duckies"src={goosey}/>
        <h2>We Want to Hear From You!</h2>
        <p>
          Leave us any feedback, questions, comments or concerns below and we
          will contact you soon.
        </p>
        <label>Don't forget to like and subscribe:</label>
        <div className="contact-icon-container">
          <a target="_blank">
            <img className="contact-icon" src={twitter} />
          </a>
          <a target="_blank">
            <img className="contact-icon" src={facebook} />
          </a>
          <a target="_blank">
            <img className="contact-icon" src={instagram} />
          </a>
          <a target="_blank">
            <img className="contact-icon" src={tiktok} />
          </a>
        </div>
        <Form className="form" name="basic" autoComplete="off">
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Leave us a Message:">
            <TextArea rows={6} />
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

