import { useState } from 'react';

import Star from './star.component';
import './star-rating.styles.css';

const StarRating = ({ maxRating = 5 }) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const setRatingClickHandler = (ratingValue) => {
    currentRating === ratingValue
      ? setCurrentRating(0)
      : setCurrentRating(ratingValue);
  };

  return (
    <div className='star-rating-container'>
      {[...Array(maxRating)].map((_, i) => {
        const ratingValue = i + 1;

        return (
          <div
            className={`star-rating ${
              ratingValue <= (hoveredRating || currentRating) ? 'active' : ''
            }`}
            key={i}
            onClick={() => setRatingClickHandler(ratingValue)}
            onMouseEnter={() => setHoveredRating(ratingValue)}
            onMouseLeave={() => setHoveredRating(0)}
          >
            &#9733;
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
