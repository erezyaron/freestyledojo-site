import React, { useState } from 'react';
import PropTypes from 'prop-types'
const ReviewItem = ({ review }) => {
  ReviewItem.propTypes = {
    review: PropTypes.node
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRaised, setIsRaised] = useState(false);
  const paragraphs = review.content.split('\n').map((item, i) => (
    <React.Fragment key={i}>
      {item}
      {i < review.content.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));
  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`review-item ${isRaised ? 'raised' : ''}`}
      onMouseEnter={() => setIsRaised(true)}
      onMouseLeave={() => setIsRaised(false)}>
      <div className="profile-details">
        <div className='name'>{review.name}</div>
        <div className='date'>{review.date}</div>
      </div>
      <span className='stars'>
      <span className='star'></span>
      <span className='star'></span>
      <span className='star'></span>
        <span className='star'></span>
        <span className='star'></span>
      </span>
      <div className={`review-content-h  ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className={`review-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {paragraphs}
      </div>
      <button onClick={handleReadMoreClick} className='read-more'>
        {isExpanded ? 'Hide' : 'Read more'}
      </button>
      </div>
    </div>
  );
};

export default ReviewItem;
