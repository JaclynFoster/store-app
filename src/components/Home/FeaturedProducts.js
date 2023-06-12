import { Carousel } from 'antd'
import muscovy from '../../images/muscovy.jpg'
import goose from '../../images/goose.jpg'
import eggs from '../../images/eggs.jpg'
import wyandotte from '../../images/wyandotte.jpg'
import React from 'react'
import 'antd/dist/reset.css'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
  return (
    <div className="featured">
      <h1 className="deals">Hot Deals:</h1>
      <Carousel className="carousel-container" autoplay>
        <div className="carousel">
          <img className="carousel-img" src={muscovy} />
          <label className="carousel-label">Muscovy Chicks 1/2 Off!</label>
        </div>
        <div className="carousel">
          <img className="carousel-img" src={goose} />
          <label className="carousel-label">Toulouse Goose $10.00 Off!</label>
        </div>
        <div className="carousel">
          <img className="carousel-img" src={eggs} />
          <label className="carousel-label">Farm Fresh Eggs $3.99!</label>
        </div>
        <div className="carousel">
          <img className="carousel-img" src={wyandotte} />
          <label className="carousel-label">Wyandottes 2 for 1 Special!</label>
        </div>
      </Carousel>
    </div>
  )
}

export default FeaturedProducts


