import { Form } from 'antd'
import React from 'react'
import Card from '../UI/Card'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import '../Contact/Contact.css'

const ContactForm = () => {
  return <div>
    <Card>
    <h2>We Want to Hear From You!</h2>
    <p>Leave us any feedback, questions, comments or concerns below and we will contact you soon.</p>
    <label>Don't forget to like and subscribe:</label>
    <div className="contact-icon-container">
    <a target="_blank"><img className="contact-icon"src={twitter}/></a>
    <a target="_blank"><img className="contact-icon"src={facebook}/></a>
    <a target="_blank"><img className="contact-icon"src={instagram}/></a>
    </div>
    </Card>
    <Form>

    </Form>
  </div>
}

export default ContactForm
