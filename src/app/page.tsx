import BlogItem from "./_components/BlogItem";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col py-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <BlogItem key={`blog-item-${i}`} isLastItem={i === 9} />
      ))}
    </div>
  );
}
