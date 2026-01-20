import { error } from "console";
import { cookies } from "next/headers";

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();
      //   console.log(cookieStore.toString());

      const res = await fetch("http://localhost:5000/api/auth/get-session", {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();

      if (!session === null) {
        return { data: null, error: { message: "Session is missing" } };
      }

      return { data: session, error: null };
    } catch (error) {
      console.error(error);
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
  getRandom: async function () {},
};
