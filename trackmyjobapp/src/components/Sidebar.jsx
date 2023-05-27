import React from "react";
import { SidebarData } from "./SidebarData";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import { Logout } from "../services/AuthService";

const Sidebar = () => {
  return (
    <div className="h-screen 2xl:right-[1300px] xl:right-[1100px] sm:right-[400px] lg:absolute lg:left-0 lg:right-0 h-full shadow-xl w-[300px]">
      <div className="w-full h-1/4 mb-8 flex justify-center items-center flex-col bg-purple-300">
        <Avatar sx={{ bgcolor: deepPurple[500] }}>GK</Avatar>
        <p className="py-4">Gopi Krishna</p>
      </div>
      <div>
        {SidebarData.map((item) => {
          return (
            <a
              href={item.link}
              className="p-4 px-16 w-full hover:bg-violet-100 inline-block"
              onMouseOver={(e) => (e.target.style.color = "purple")}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              {item.Icon}
              <p className="pl-4 inline-block">{item.name}</p>
            </a>
          );
        })}
        <button
          className="p-4 px-16 hover:bg-violet-100 flex w-full"
          onMouseOver={(e) => (e.target.style.color = "purple")}
          onMouseOut={(e) => (e.target.style.color = "")}
          onClick={Logout}
        >
          <LogoutIcon />
          <p className="px-4">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
