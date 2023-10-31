import BlogItem from "../_components/BlogItem";

export default function Search() {
  return (
    <div className="flex min-h-screen flex-col py-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <BlogItem key={`blog-item-${i}`} isLastItem={i === 9} />
      ))}
    </div>
  );
}
