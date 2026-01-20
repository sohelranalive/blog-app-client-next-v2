import { env } from "@/env";
import { error } from "console";

const APU_URL = env.API_URL;

export const blogService = {
  getBlogPosts: async function () {
    try {
      const res = await fetch(`${APU_URL}/post`);
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
};
