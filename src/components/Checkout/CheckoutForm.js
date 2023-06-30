import React from 'react'
import Progress from './Progress'
import Customer from './Customer'
import Payment from './Payment'
import Shipping from './Shipping'
import { Collapse } from 'antd'

const CheckoutForm = () => {
  const items = [
    {
      key: '1',
      label: 'Customer:',
      children: <Customer />
    },
    {
      key: '2',
      label: 'Shipping:',
      children: <Shipping />
    },
    {
      key: '3',
      label: 'Payment',
      children: <Payment />
    }
  ]

  const onChange = key => {
    console.log('Collapse key:', key)
  }

  return (
    <div>
      <Progress />
      <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
    </div>
  )
}

export default CheckoutForm
