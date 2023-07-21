import React, { useState } from 'react'
import Card from '../UI/Card'
import ContactRequest from './ContactRequest'
import goosey from '../../images/goosey.jpeg'
import '../Contact/Contact.css'

const ContactForm = () => {
  const [contactObj, setContactObj] = useState({
    contact_name: '',
    contact_email: '',
    contact_message: ''
  })

  const contactStateHandler = (objectKeyName, value) => {
    console.log({ objectKeyName })
    console.log({ value })
    const newObj = Object.assign(contactObj, { [objectKeyName]: value })
    console.log('new obj: ', newObj)
    setContactObj(newObj)
  }

  return (
    <div className="contact-form-container">
      <Card overrideClass={'contact-form-card'}>
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
        <ContactRequest
          contact_name={contactObj.contact_name}
          contact_email={contactObj.contact_email}
          contact_message={contactObj.contact_message}
          contactObj={contactObj}
          setContactObj={setContactObj}
          contactStateHandler={contactStateHandler}
        />
      </Card>
    </div>
  )
}

export default ContactForm





