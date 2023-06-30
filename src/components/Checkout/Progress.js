import React from 'react'
import { Steps } from 'antd'
import './Progress.css'

const Progress = () => {
  return (
    <div className="steps-container">
      <Steps
        items={[
          {
            title: 'Details'
          },
          {
            title: 'Shipping'
          },

          {
            title: 'Payment'
          }, 
          {
            title: 'Order Summary'
          }
        ]}
      />
    </div>
  )
}

export default Progress
