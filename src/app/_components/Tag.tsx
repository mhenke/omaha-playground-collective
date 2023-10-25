const Tag = () => {
  return (
    <div className="join ">
      <input
        className="btn btn-primary btn-outline join-item"
        type="radio"
        name="options"
        aria-label="Tag 1"
      />
      <input
        className="btn btn-primary btn-outline join-item"
        type="radio"
        name="options"
        aria-label="Tag 2"
      />
      <input
        className="btn btn-primary btn-outline join-item"
        type="radio"
        name="options"
        aria-label="Tag 3"
      />
    </div>
  );
};

export default Tag;
