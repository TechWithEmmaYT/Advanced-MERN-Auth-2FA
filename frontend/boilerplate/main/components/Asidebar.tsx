import React from "react";
import {
  ChevronsUpDown,
  EllipsisIcon,
  Home,
  Lock,
  LogOut,
  MoonIcon,
  MoonStarIcon,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroupContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Asidebar = () => {
  const { open } = useSidebar();
  const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Sessions",
      url: "/sessions",
      icon: Lock,
    },
    {
      title: "Account",
      url: "#",
      icon: User,
    },

    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="!pt-0 dark:bg-background">
        <div className="flex h-[60px] items-center">
          <Link
            href="/home"
            className="text-xl flex items-center tracking-[-0.16px] text-black dark:text-[#fcfdffef] font-bold mb-0"
          >
            <div className="size-[30px] rounded-lg  flex items-center border-2 dark:border-gray-200 justify-center  bg-gradient-to-br from-gray-500 to-black to-90% ">
              <div className="font-bold text-gray-50 text-xl">S</div>
            </div>
            {open && <div className="hidden md:flex ml-2">Squeezy</div>}
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className="dark:bg-background">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="!text-[15px]">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="dark:bg-background">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Emma</span>
                    <span className="truncate text-xs">emm@gmail.com</span>
                  </div>
                  <EllipsisIcon className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side={"bottom"}
                align="start"
                sideOffset={4}
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <MoonStarIcon />
                    Toggle theme
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default Asidebar;
