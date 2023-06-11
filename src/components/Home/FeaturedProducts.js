import { Carousel } from 'antd'
import muscovy from '../../images/muscovy.jpg'
import goose from '../../images/goose.jpg'
import eggs from '../../images/eggs.jpg'
import wyandotte from '../../images/wyandotte.jpg'
import React from 'react'

const FeaturedProducts = () => {
  return (
    <div>
      <h1>Hot Deals:</h1>
      <Carousel autoplay>
        <div>
          <img className="carousel-img" src={muscovy} />
          <label>Muscovy Chicks 1/2 Off!</label>
        </div>
        <div>
          <img className="carousel-img" src={goose} />
          <label>Toulouse Goose $10.00 Off!</label>
        </div>
        <div>
          <img className="carousel-img" src={eggs} />
          <label>Farm Fresh Eggs $3.99!</label>
        </div>
        <div>
          <img className="carousel-img" src={wyandotte} />
          <label>Wyandottes 2 for 1 Special!</label>
        </div>
      </Carousel>
    </div>
  )
}

export default FeaturedProducts

