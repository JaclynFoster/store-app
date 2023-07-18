import React, { useState } from 'react'
import Progress from './Progress'
import Customer from './Customer'
import Payment from './Payment'
import Shipping from './Shipping'
import Summary from './Summary'
import { Collapse } from 'antd'
import './CheckoutForm.css'
import CartSummary from './CartSummary'

const CheckoutForm = () => {
  const [current, setCurrent] = useState(0)

  const items = [
    {
      key: '1',
      label: 'Billing:',
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
    },
    {
      key: '4',
      label: 'Summary',
      children: <Summary />
    }
  ]

  const onChange = key => {
    console.log('Collapse key:', key)
  }

  return (
    <div>
      <Progress current={current} setCurrent={setCurrent} />
      <div className="checkout-flex">
        <CartSummary />
        <Collapse
          size="large"
          width={300}
          height={300}
          className="collapse-container"
          items={items}
          defaultActiveKey={['1']}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default CheckoutForm



