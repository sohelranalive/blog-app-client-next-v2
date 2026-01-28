import { BlogDetail } from "@/components/layout/BlogDetail";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { data } = await blogService.getBlogPosts();

  return data?.data?.data
    .map((blog: BlogPost) => ({ id: blog.id }))
    .splice(0, 3);
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await blogService.getBlogById(id);
  const post = data.data;
  // console.log(post);

  return <BlogDetail post={post} />;
}
