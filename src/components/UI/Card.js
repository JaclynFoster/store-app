import React from 'react'
import '../UI/Card.css'
import { ProgressTypes } from 'antd/es/progress/progress'


const Card = props => {
  return <div className={props.overrideClass ? props.overrideClass : "card"}>{props.children}</div>
}

export default Card

