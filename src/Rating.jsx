import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starCount) => {
    setRating(starCount);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
          onClick={() => handleStarClick(i)}
        >
          &#9733; {}
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <div style={{color: 'red'}} className="rating">{renderStars()}</div>
      <p>Вы выбрали: {rating} звезды.</p>
    </div>
  );
};

export default Rating;
