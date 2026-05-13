import SingleBlogPage from "@/components/section/Blog/SingleBlogPage";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function SingleBlog({ params }: Props) {
  const { slug } = await params;

  return <SingleBlogPage slug={slug} />;
}
