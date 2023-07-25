import React from 'react'
import '../UI/Card.css'

const Card = props => {
  return (
    <div className={props.overrideClass ? props.overrideClass : 'card'}>
      {props.children}
    </div>
  )
}

export default Card


