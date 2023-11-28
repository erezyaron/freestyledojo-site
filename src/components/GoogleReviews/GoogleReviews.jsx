import React, { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem';
import reviewsData from './reviews.json'; // Path to your JSON file
import './GoogleReviews.css'
import { faDisplay } from '@fortawesome/free-solid-svg-icons';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Load reviews from JSON file
    setReviews(reviewsData);
  }, []);

  const [visibleReviews, setVisibleReviews] = useState(reviewsData.slice(0, 3)); // Start with the first three reviews
  const handlePrevClick = () => {
    setVisibleReviews((prevReviews) => {
      let startIndex = reviewsData.indexOf(prevReviews[0]) - 1;
      if (startIndex < 0) startIndex = reviewsData.length - 3; // Wrap to the end
      return reviewsData.slice(startIndex, startIndex + 3);
    });
  };
  const handleNextClick = () => {
    setVisibleReviews((prevReviews) => {
      let startIndex = reviewsData.indexOf(prevReviews[2]) + 1;
      if (startIndex + 2 >= reviewsData.length) startIndex = 0; // Wrap to the start
      return reviewsData.slice(startIndex, startIndex + 3);
    });
  };

  return (
    <>
    <div className="reviews-section">
      <div className="review-arrow prev" onClick={handlePrevClick}>&#10094;</div>
      {/* Display only the current review or a subset based on currentReviewIndex */}
      {visibleReviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}      
      <div className="review-arrow next" onClick={handleNextClick}>&#10095;</div>
    </div>
    <div className="review-controls">
    <div className="overall-rating">
      Google rating score: 5.0 of 5, based on 59 reviews
    </div>
  </div>
  </>
  );
};

export default GoogleReviews;
