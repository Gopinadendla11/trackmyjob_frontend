import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

export const SidebarData = [
  {
    name: "Dashboard",
    Icon: <DashboardIcon className="nav-icon" />,
    link: "/",
  },
  {
    name: "My Applications",
    Icon: <FormatListBulletedIcon />,
    link: "/applications",
  },
  {
    name: "Profile",
    Icon: <AccountCircleIcon />,
    link: "/profile",
  },
  {
    name: "Add Application",
    Icon: <AccountCircleIcon />,
    link: "/new-application",
  },
];
