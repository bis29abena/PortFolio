"use client"
import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import { useSession } from "next-auth/react";

const layout = ({ children }) => {
  const session = useSession();
  return (
    <div style={{ display: "flex", alignItems:'center', justifyContent:'center' }}>
      {session.status === "authenticated" && <DashboardSidebar/>}
      {children}
    </div>
  );
};

export default layout;
