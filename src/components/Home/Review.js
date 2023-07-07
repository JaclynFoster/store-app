import React from 'react'
import Card from '../UI/Card'
import { Rate } from 'antd'
import './Review.css'


const Review = () => {
    return (
        <div className="review-container">
        

            <h2>Leave us a Review:</h2>
            <Rate allowHalf defaultValue={4.5} />
            <textarea className="review-text"placeholder="Tell us what you think..."></textarea>
            <button className="review-submit">Submit</button>
            <h2>Here's what others have said:</h2>
        <div className="review-example-container">
            <div className="review-example">
                <Rate disabled defaultValue={5}/>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod in pellentesque massa.
         Elit duis tristique sollicitudin nibh sit amet commodo. Ac turpis egestas maecenas pharetra 
         convallis posuere morbi. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. " 
                </p>
                <span>-Julia K.</span>
            </div>
            <div className="review-example">
                <Rate disabled defaultValue={5}/>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod in pellentesque massa.
         Elit duis tristique sollicitudin nibh sit amet commodo. Ac turpis egestas maecenas pharetra 
         convallis posuere morbi. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. " 
                </p>
                <span>-Arnold S.</span>
            </div>
            <div className="review-example">
                <Rate disabled defaultValue={5}/>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod in pellentesque massa.
         Elit duis tristique sollicitudin nibh sit amet commodo. Ac turpis egestas maecenas pharetra 
         convallis posuere morbi. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. " 
                </p>
                <span>-Mavis C.</span>
            </div>
        </div>
       
        </div>
    )
}

export default Review