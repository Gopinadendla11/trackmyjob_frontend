import React from "react";
import Sidebar from "../components/Sidebar";

export const Profile = () => {
  return (
    <div className="h-screen w-screen flex overflow-x-hidden">
      <div className=" basis-1/6">
        <Sidebar />
      </div>
    </div>
  );
};
