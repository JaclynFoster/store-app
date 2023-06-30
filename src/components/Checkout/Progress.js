import React from 'react'
import { Steps } from 'antd'

const Progress = () => {
  return (
    <div>
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
          }
        ]}
      />
    </div>
  )
}

export default Progress
