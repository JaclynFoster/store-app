import React from 'react'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/instagram.png'
import tiktok from '../../images/tiktok.png'
import { CopyrightOutlined, MailOutlined } from '@ant-design/icons'
import './Footer.css'
import { Divider } from 'antd'

const Footer = () => {
  return (
    <div className="footer">
      <div className="section-one">
        <div className="footer-logo-container">
          <img className="footer-logo" src={facebook} />
          <img className="footer-logo" src={twitter} />
          <img className="footer-logo" src={instagram} />
          <img className="footer-logo" src={tiktok} />
        </div>
      </div>
      <div className="quick-link-container">
        <h4 className="link-title">Helpful Links:</h4>
        <div className="quick-links">
          <a>Your Account</a>
          <Divider type="vertical" orientation="center" />
          <a>Glossary of Terms</a>
          <Divider type="vertical" orientation="center" />
          <a>FAQ</a>
          <Divider type="vertical" orientation="center" />
          <a>Shipping Rates</a>
          <Divider type="vertical" orientation="center" />
          <a>Care Sheets</a>
          <Divider type="vertical" orientation="center" />
          <a>Privacy Policy</a>
          <Divider type="vertical" orientation="center" />
          <a>Contact Us</a>
          <Divider type="vertical" orientation="center" />
          <a>Volunteer Opportunities</a>
        </div>
        <div className="mail-contact">
          <MailOutlined className="mail-logo" />
          <label>fawsturfam@fawsturfarms.com</label>
        </div>
        <div className="copyright">
          <label>
            Copyright <CopyrightOutlined /> 2023 Fawstur Farms all rights
            reserved
          </label>
          <label>Powered & Developed by Jaclyn Foster</label>
        </div>
      </div>
    </div>
  )
}

export default Footer


