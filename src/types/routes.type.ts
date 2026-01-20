// export interface Route {
//   projects: [
//     {
//       name: string;
//       url: string;
//     },
//   ];
// }

export type RouteItem = {
  name: string;
  url: string;
};

export type Route = {
  projects: RouteItem[];
};

// type RouteItem = {
//   name: string;
//   url: string;
// };

// export interface Route {
//   projects: RouteItem[];
// };

// export const userRoute = {
//   projects: [
//     {
//       name: "Manage Blog",
//       url: "/manage-blog",
//     },
//     {
//       name: "Write Blog",
//       url: "/write-blog",
//     },
//   ],
// };
