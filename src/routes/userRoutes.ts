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

import { Route } from "../app/types";

export const userRoute: Route = {
  projects: [
    {
      name: "Write Blog",
      url: "/dashboard",
    },
    {
      name: "Manage Blog",
      url: "/admin-dashboard",
    },
  ],
};
