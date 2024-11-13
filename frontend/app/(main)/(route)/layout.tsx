"use client";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Asidebar from "../_components/Asidebar";
import Header from "../_components/Header";
import { useAuthContext } from "@/context/auth-provider";
import { redirect } from "next/navigation";
import { Loader } from "lucide-react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoading, user } = useAuthContext();
  if (isLoading) {
    return (
      <div
        className="w-full fixed flex items-center  backdrop-blur-sm text-2xl justify-center inset-0 
      bg-[rgba(255,255,255,.2)] "
      >
        <Loader size="30px" className="animate-spin" />
        Loading Squeezy...
      </div>
    );
  }

  if (!user) {
    return redirect("/");
  }
  return (
    <SidebarProvider>
      <Asidebar />
      <SidebarInset>
        <main className="w-full">
          <Header />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
