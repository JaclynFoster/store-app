import React from 'react'
import Progress from './Progress'


const CheckoutForm = ({ current, setCurrent }) => {
  return (
    <div>
      <Progress current={current} setCurrent={setCurrent} />
    </div>
  )
}

export default CheckoutForm




