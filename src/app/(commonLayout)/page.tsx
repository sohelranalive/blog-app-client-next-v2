import { authClient } from "@/lib/auth-client";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.services";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Home() {
  const { data } = await blogService.getBlogPosts();
  console.log(data);

  return (
    <div>
      <h1>This is home</h1>
    </div>
  );
}
