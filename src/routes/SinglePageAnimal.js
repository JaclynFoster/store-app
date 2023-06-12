import React from 'react'
import Layout from '../components/Layout/Layout'
import SPAGrid from '../components/Animals/SPAGrid'
import { RollbackOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import "../components/Animals/SinglePageAnimal.css"

const SinglePageAnimal = () => {
    const navigate = useNavigate()
    const backHandler = () => {
        navigate('/fowl', {replace: true})
    } 
    return (
     <Layout> 
        <button className="back-btn" onClick={() => backHandler()}>Back <RollbackOutlined /></button> 
        <SPAGrid />
     </Layout>
    )
}

export default SinglePageAnimal