import React from 'react'
import Layout from '../components/Layout/Layout'
import ContactForm from '../components/Contact/ContactForm'
import ContactCard from '../components/Contact/ContactCard'
import '../components/Contact/Contact.css'

const Contact = () => {
  return (
    <Layout>
 
  
     <ContactCard />
     <ContactForm />

    
    </Layout>
  )
}

export default Contact
