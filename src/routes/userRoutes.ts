// export const userRoute = [
//   {
//     name: "User Dashboard",
//     url: "/dashboard",
//   },
//   {
//     name: "Admin Dashboard",
//     url: "/admin-dashboard",
//   },
// ];

import { Route } from "../types";

export const userRoute: Route = {
  projects: [
    {
      name: "Write Blog",
      url: "/dashboard/write-blog",
    },
    {
      name: "Manage Blog",
      url: "/dashboard/manage-blog",
    },
  ],
};
