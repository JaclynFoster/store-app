import React from 'react'
import Card from '../UI/Card'
import {
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  PrinterOutlined
} from '@ant-design/icons'
import { Divider } from 'antd'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import tiktok from '../../images/tiktok.png'

const ContactCard = () => {
  return (
    <Card overrideClass={'contact-card-main'}>
      <h3>Contact Us:</h3>
      <Divider />
      <div className="contact-info-container">
        <div className="contact-info">
          <MailOutlined /> <span> fawsturfam@fawsturfarms.com</span>
        </div>
        <div className="contact-info">
          <MailOutlined /> <span> info@fawsturfarms.com</span>
        </div>
        <div className="contact-info">
          <HomeOutlined /> <span>1234 My Address</span>
          <span>Tyler, TX 75703</span>
        </div>
        <div className="contact-info">
          <PhoneOutlined /> <span>972-555-4545</span>
        </div>
        <div className="contact-info">
          <PrinterOutlined /> <span> 972-555-4546</span>
        </div>
      </div>
      <Divider />
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
    </Card>
  )
}

export default ContactCard


