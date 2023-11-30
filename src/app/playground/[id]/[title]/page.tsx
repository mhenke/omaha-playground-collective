import BlogPage from "~/app/_components/BlogPage";

type Props = {
  readonly params: { id: string };
};

export default function LeadBlog({ params }: Props) {
  const { id } = params;

  return (
    // i need to pass in id to the blog page
    <BlogPage id={Number(id)} />
  );
}
