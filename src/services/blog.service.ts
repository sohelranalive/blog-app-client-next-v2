import { env } from "@/env";
import { error } from "console";
import { url } from "inspector";
import { Key } from "lucide-react";
import { ur } from "zod/v4/locales";

const APU_URL = env.API_URL;

interface getBlogsParam {
  isFeatured?: boolean;
  search: string;
}

interface serviceOption {
  cache?: RequestCache;
  revalidate?: number;
}

export const blogService = {
  getBlogPosts: async function (
    params?: getBlogsParam,
    options?: serviceOption,
  ) {
    try {
      const url = new URL(`${APU_URL}/post`);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }

      const res = await fetch(url.toString(), config);
      const data = await res.json();

      // example
      //   if(data.success){
      //     return
      //   }

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  getBlogById: async function (id: string) {
    try {
      const res = await fetch(`${APU_URL}/post/${id}`);
      const data = await res.json();
      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
};
