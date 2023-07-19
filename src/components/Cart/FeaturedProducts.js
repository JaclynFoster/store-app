import { Carousel } from 'antd'
import muscovy from '../../images/muscovy.jpg'
import redEared from '../../images/redEared.jpg'
import beardie from '../../images/beardie.jpg'
import wyandotte from '../../images/wyandotte.jpg'
import React from 'react'
import './FeaturedProducts.css'
import Card from '../UI/Card'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center'
}

const FeaturedProducts = () => {
  return (
    <Card overrideClass={'featured'}>
      <h1 className="deals">Hot Deals:</h1>
      <Carousel autoplay>
        <div>
          <img className="carousel-img" style={contentStyle} src={muscovy} />
          <label className="carousel-label">Muscovy Chicks 1/2 Off!</label>
        </div>
        <div>
          <img className="carousel-img" style={contentStyle} src={redEared} />
          <label className="carousel-label">
            Red Eared Sliders $10.00 Off!
          </label>
        </div>
        <div>
          <img className="carousel-img" style={contentStyle} src={beardie} />
          <label className="carousel-label">Beardies for $79.99!</label>
        </div>
        <div>
          <img className="carousel-img" style={contentStyle} src={wyandotte} />
          <label className="carousel-label">Wyandottes 2 for 1 Special!</label>
        </div>
      </Carousel>
    </Card>
  )
}

export default FeaturedProducts



