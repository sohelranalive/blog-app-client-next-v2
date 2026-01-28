import { SimplePostCard } from "@/components/layout/SimplePostCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function Home() {
  const { data } = await blogService.getBlogPosts(
    {
      isFeatured: false,
      search: "",
    },
    {
      cache: "no-store",
    },
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data?.data?.data?.map((post: BlogPost) => (
        <SimplePostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
