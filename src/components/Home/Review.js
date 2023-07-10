import React, { useState } from 'react'
import { Rate } from 'antd'
import './Review.css'
import { useDispatch, useSelector } from 'react-redux'
import { modalOptions, showModal } from '../../redux/slices/modalSlice'
import UseModal from '../UI/UseModal'

const Review = () => {
  const [reviewText, setReviewText] = useState('')
  const dispatch = useDispatch()
  const modal = useSelector(modalOptions)

  const reviewModal = () => {
    dispatch(showModal('review'))
    setReviewText('')
  }
  return (
    <div className="review-container">
      <h2>Leave us a Review:</h2>
      <Rate allowHalf defaultValue={4.5} />
      <textarea
        value={reviewText}
        onChange={e => setReviewText(e.target.value)}
        className="review-text"
        placeholder="Tell us what you think..."
      />
      {modal.review ? (
        <UseModal>
          <h2>Thank you for your feedback. We appreciate you.</h2>
        </UseModal>
      ) : null}

      <button onClick={reviewModal} className="review-submit">
        Submit
      </button>
      <h2>Here's what others have said:</h2>
      <div className="review-example-container">
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
