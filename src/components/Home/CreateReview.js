import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalOptions, showModal } from '../../redux/slices/modalSlice'
import UseModal from '../UI/UseModal'
import axios from 'axios'
import { Rate } from 'antd'
import './Review.css'

const CreateReview = ({ reviewObj, setReviewObj, reviewStateHandler }) => {
  const { rating, name, message } = reviewObj
  const modal = useSelector(modalOptions)
  const dispatch = useDispatch()

  const createReview = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/createReview`, {
        rating,
        name,
        message
      })
      .then(res => {
        console.log('Create Review:', { ...res.data })
        setReviewObj({ ...res.data })
        dispatch(showModal('review'))
        let newReviewObj = { ...reviewObj }
        Object.keys(reviewObj).forEach(key => (newReviewObj[key] = ''))
        setReviewObj(newReviewObj)
      })
      .catch(err => {
        console.log('err on createReview', err)
      })
  }

  return (
    <div className="create-review-container">
      <h2>Leave us a Review:</h2>
      <Rate
        allowHalf
        defaultValue={4.5}
        value={rating}
        onChange={value => reviewStateHandler('rating', value)}
      />
      <input
        className="review-input"
        value={name}
        onChange={e => reviewStateHandler('name', e.target.value)}
        placeholder="Name..."
        type="text"
      />
      <textarea
        value={message}
        onChange={e => reviewStateHandler('message', e.target.value)}
        className="review-text"
        placeholder="Tell us what you think..."
      />
      {modal.review ? (
        <UseModal>
          <h2>Thank you for your feedback. We appreciate you.</h2>
        </UseModal>
      ) : null}

      <button onClick={createReview} className="review-submit">
        Submit
      </button>
    </div>
  )
}

export default CreateReview

