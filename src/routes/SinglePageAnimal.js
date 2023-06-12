import React from 'react'
import Layout from '../components/Layout/Layout'
import SPAGrid from '../components/Animals/SPAGrid'
import { RollbackOutlined } from '@ant-design/icons'
import "../components/Animals/SinglePageAnimal.css"

const SinglePageAnimal = () => {
    return (
     <Layout>
        <button className="back-btn">Back <RollbackOutlined /></button>
        <SPAGrid />
     </Layout>
    )
}

export default SinglePageAnimal