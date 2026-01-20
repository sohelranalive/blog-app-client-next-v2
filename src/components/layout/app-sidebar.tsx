"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartBar,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  Pen,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/layout/nav-main";
import { NavProjects } from "@/components/layout/nav-projects";
import { NavUser } from "@/components/layout/nav-user";
import { TeamSwitcher } from "@/components/layout/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { adminRoute } from "@/routes/adminRoutes";
import { userRoute } from "@/routes/userRoutes";
import { Route } from "@/types";
import { Roles } from "@/constants/roles";

// This is sample data.
// const data = {
//   projects: [
//     {
//       name: "User Dashboard",
//       url: "/dashboard",
//       icon: ChartBar,
//     },
//     {
//       name: "Admin Dashboard",
//       url: "/admin-dashboard",
//       icon: Pen,
//     },
//   ],
// };

export function AppSidebar({
  user,
  ...props
}: {
  user: { role: string } & React.ComponentProps<typeof Sidebar>;
}) {
  let data: Route = {
    projects: [],
  };

  switch (user.role) {
    case Roles.admin:
      data = adminRoute;
      break;
    case Roles.user:
      data = userRoute;
      break;
    default:
      data = { projects: [] };
      break;
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
