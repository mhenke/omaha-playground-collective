const Tag = () => {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: 3 }).map((_, index) => (
        <button className="btn btn-sm space-x-1 rounded-full px-4" key={index}>
          Tag {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Tag;
