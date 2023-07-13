import React from 'react'
import { Steps } from 'antd'
import './Progress.css'

const Progress = ({current, setCurrent}) => {
  const Step = Steps.Step
  const steps = [
    {
      title: 'Billing'
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
  ]
  return (
    <div className="steps-container">
      <Steps steps={steps} current={current} setCurrent={setCurrent}>
          {steps.map(step => (
            <Step key={step.title} title={step.title}/>
          )

          )}
      </Steps>
    </div>
  )
}

export default Progress
