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
  const [review, setReview] = useState([])
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
        console.log('Review Object', Object.keys(reviewObj))
        setReview([...res.data])
        console.log('setReviewObj:', setReviewObj([{ ...res.data }]))
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
        {review.map(item => {
          return (
            <div className="review-example">
              <Rate value={Number(item.rating)} />

              <p>{item.message}</p>
              <span>-{item.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Review



