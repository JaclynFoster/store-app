import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Loading from '../UI/Loading'
import { selectLoading } from '../../redux/slices/isLoadingSlice'

import '../Layout/Layout.css'
import { useSelector } from 'react-redux'

const Layout = props => {
  let isLoading = useSelector(selectLoading)
  return (
    <div className="layout">
      <NavBar />
      {props.children}
      {isLoading && <Loading />}
      <Footer />
    </div>
  )
}

export default Layout




