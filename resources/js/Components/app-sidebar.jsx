import * as React from "react"
import { usePage } from "@inertiajs/react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { 
  LayoutDashboard, 
  FileTextIcon, 
  BriefcaseIcon, 
  MessageSquareIcon, 
  BadgeDollarSignIcon, 
  SettingsIcon 
} from "lucide-react"

export function AppSidebar({
  ...props
}) {
  const { auth, counts } = usePage().props

  const data = {
    user: {
      name: auth?.user?.name || "Admin",
      email: auth?.user?.email || "admin@safebuild.ca",
      avatar: "",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: <LayoutDashboard />,
        isActive: route().current('admin.dashboard'),
      },
      {
        title: "Content",
        url: "/admin/content",
        icon: <FileTextIcon />,
        isActive: route().current('admin.content*'),
      },
      {
        title: "Blog Posts",
        url: "/admin/blog",
        icon: <FileTextIcon />,
        isActive: route().current('admin.blog*'),
      },
      {
        title: "Careers",
        url: "/admin/careers",
        icon: <BriefcaseIcon />,
        isActive: route().current('admin.careers*'),
        badge: counts?.applications > 0 ? counts.applications : null,
      },
      {
        title: "Contact Messages",
        url: "/admin/contact-messages",
        icon: <MessageSquareIcon />,
        isActive: route().current('admin.messages*'),
        badge: counts?.messages > 0 ? counts.messages : null,
      },
      {
        title: "Quote Requests",
        url: "/admin/quote-requests",
        icon: <BadgeDollarSignIcon />,
        isActive: route().current('admin.quotes*'),
        badge: counts?.quotes > 0 ? counts.quotes : null,
      },
      {
        title: "Business Settings",
        url: "/admin/settings",
        icon: <SettingsIcon />,
        isActive: route().current('admin.settings*'),
      },
    ],
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <span className="font-bold">SB</span>
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold text-sidebar-foreground">SafeBuild</span>
              <span className="truncate text-xs text-sidebar-foreground/70">CMS Admin</span>
            </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
