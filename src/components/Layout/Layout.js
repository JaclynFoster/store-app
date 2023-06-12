import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

import "../Layout/Layout.css"


const Layout = (props) => {
  return( 
  <div className="layout">
    <NavBar />
    {props.children}
    <Footer />
  </div>
  )
}

export default Layout


