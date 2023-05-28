import React, { useState, useEffect } from "react";
import { SidebarData } from "./SidebarData";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import { Logout } from "../services/AuthService";
import { GetUserData } from "../services/UserDataService";

const Sidebar = () => {
  const [name, setName] = useState("");
  const [intials, setIntials] = useState("");
  const getData = async () => {
    const response = await GetUserData();
    if (response.status === 200) {
      const user = response.data;
      let updateName =
        user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1);
      setName(updateName);
      setIntials(
        user.first_name.charAt(0).toUpperCase() +
          user.last_name.charAt(0).toUpperCase()
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="h-full shadow-xl ">
      <div className="w-full h-1/4 mb-8 flex justify-center items-center flex-col bg-purple-300">
        <Avatar sx={{ bgcolor: deepPurple[500] }}>{intials}</Avatar>
        <p className="py-4 font-bold">{name}</p>
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
