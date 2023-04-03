const Star = ({ ratingValue, currentRating, hoveredRating }) => {
  return (
    <p
      class={`star-rating ${
        (currentRating || hoveredRating) >= ratingValue ? 'active' : ''
      }`}
    >
      {ratingValue}
    </p>
  );
};

export default Star;
