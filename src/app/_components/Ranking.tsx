interface RatingProps {
  rating: number | null | undefined;
}
// input will be checked when i = rating

const Rating: React.FC<RatingProps> = ({ rating }) => {
  rating = rating ?? 0;

  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <input
          key={`rating-${i}`}
          type="radio"
          className="mask mask-star"
          checked={i === rating}
          readOnly
        />
      ))}
    </div>
  );
};

export default Rating;
