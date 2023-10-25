const Tag = () => {
  return (
    <div className="join ">
              <input
                className="join-item btn btn-outline btn-primary"
                type="radio"
                name="options"
                aria-label="Tag 1"
              />
              <input
                className="join-item btn btn-outline btn-primary"
                type="radio"
                name="options"
                aria-label="Tag 2"
              />
              <input
                className="join-item btn btn-outline btn-primary"
                type="radio"
                name="options"
                aria-label="Tag 3"
              />
            </div>
  );
};

export default Tag;
