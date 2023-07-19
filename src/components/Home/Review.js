import React, { useEffect, useState } from 'react'
import { Rate } from 'antd'
import axios from 'axios'
import './Review.css'
import {
  setLoadingFalse,
  setLoadingTrue
} from '../../redux/slices/isLoadingSlice'
import { useDispatch } from 'react-redux'
import CreateReview from './CreateReview'

const Review = () => {
  const [reviewObj, setReviewObj] = useState({
    rating: '',
    name: '',
    message: ''
  })

  const dispatch = useDispatch()

  const reviewStateHandler = (objectKeyName, value) => {
    setReviewObj({ ...reviewObj, [objectKeyName]: value })
  }

  const getReviews = () => {
    dispatch(setLoadingTrue())
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/getReviews`)
      .then(res => {
        setReviewObj([{ ...res.data }])
        dispatch(setLoadingFalse())
        console.log('getReviews:', res.data)
      })
      .catch(err => {
        console.log('Error on getReviews:', err)
      })
  }

  useEffect(() => {
    getReviews()
  }, [])
  return (
    <div className="review-container">
      <CreateReview
        reviewObj={reviewObj}
        setReviewObj={setReviewObj}
        reviewStateHandler={reviewStateHandler}
      />
      <h2>Here's what others have said:</h2>
      <div className="review-example-container">
        <div className="review-example">
          {/* <Rate count={rating} /> */}
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt augue interdum velit euismod in pellentesque massa. Elit
            duis tristique sollicitudin nibh sit amet commodo. Ac turpis egestas
            maecenas pharetra convallis posuere morbi. Imperdiet sed euismod
            nisi porta lorem mollis aliquam ut porttitor. "
          </p>
          <span>-Julia K.</span>
        </div>
        <div className="review-example">
          <Rate disabled defaultValue={5} />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt augue interdum velit euismod in pellentesque massa. Elit
            duis tristique sollicitudin nibh sit amet commodo. Ac turpis egestas
            maecenas pharetra convallis posuere morbi. Imperdiet sed euismod
            nisi porta lorem mollis aliquam ut porttitor. "
          </p>
          <span>-Arnold S.</span>
        </div>
        <div className="review-example">
          <Rate disabled defaultValue={5} />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt augue interdum velit euismod in pellentesque massa. Elit
            duis tristique sollicitudin nibh sit amet commodo. Ac turpis egestas
            maecenas pharetra convallis posuere morbi. Imperdiet sed euismod
            nisi porta lorem mollis aliquam ut porttitor. "
          </p>
          <span>-Mavis C.</span>
        </div>
      </div>
    </div>
  )
}

export default Review

