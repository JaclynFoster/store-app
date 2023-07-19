import React from 'react'
import Customer from './Customer'
import Shipping from './Shipping'
import Payment from './Payment'
import Summary from './Summary'

export const StepsTabs = (checkoutObj, stateCheckoutHandler) => [
  {
    title: 'Billing',
    content: (
      <Customer
        checkoutObj={checkoutObj}
        stateCheckoutHandler={stateCheckoutHandler}
      />
    )
  },
  {
    title: 'Shipping',
    content: (
      <Shipping
        checkoutObj={checkoutObj}
        stateCheckoutHandler={stateCheckoutHandler}
      />
    )
  },

  {
    title: 'Payment',
    content: (
      <Payment
        checkoutObj={checkoutObj}
        stateCheckoutHandler={stateCheckoutHandler}
      />
    )
  },
  {
    title: 'Order Summary',
    content: <Summary />
  }
]
