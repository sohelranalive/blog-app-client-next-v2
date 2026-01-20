// export const adminRoute = [
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

export const adminRoute: Route = {
  projects: [
    {
      name: "Analytics",
      url: "/admin-dashboard/analytics",
    },
    {
      name: "Statistics",
      url: "/admin-dashboard/statistics",
    },
  ],
};
