"use client";
import React from "react";
import styles from "./dashboardsidebar.module.css";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import Person3Icon from "@mui/icons-material/Person3";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { usePathname } from "next/navigation";
import Link from "next/link";

const sideBarData = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <DashboardIcon className={styles.icon} />,
  },
  {
    path: "/dashboard/analytics",
    name: "Analytics",
    icon: <BarChartIcon className={styles.icon} />,
  },
  {
    path: "/dashboard/settings",
    name: "Settings",
    icon: <SettingsIcon className={styles.icon} />,
  },
  {
    path: "/dashboard/logs",
    name: "Logs",
    icon: <WebStoriesIcon className={styles.icon} />,
  },
  {
    path: "/dashboard/users",
    name: "users",
    icon: <Person3Icon className={styles.icon} />,
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname()

  return (
    <div className={styles.container}>
      {sideBarData.map((links, index) => (
        <div
          style={
            pathname === `${links.path}` ? { color: "#53c28b" } : null
          }
          className={styles.links}
          key={index}
        >
          {links.icon}
          <Link href={links.path} className={styles.link}>
            {links.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DashboardSidebar;
