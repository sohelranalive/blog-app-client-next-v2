"use client";

import { getBlogs } from "@/actions/blog.actions";
import { useEffect, useState } from "react";
import { any } from "zod";

export default function AboutPage() {
  // await new Promise((resolve) => setTimeout(resolve, 4000));

  const [data, setData] = useState();
  const [error, setError] = useState<{ message: string } | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await getBlogs();

      setData(data);
      setError(error);
    })();
  }, []);

  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
}
