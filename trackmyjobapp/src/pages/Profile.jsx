import React from "react";
import Sidebar from "../components/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";

export const Profile = () => {
  const [showsidebar, setsidebar] = React.useState(true);

  const toggleSideNav = () => {
    setsidebar((prev) => !prev);
  };
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <button className="h-4 lg:hidden" onClick={toggleSideNav}>
        <MenuIcon></MenuIcon>
      </button>
      <div className="flex">
        <div className="hidden lg:block lg:basis-3/12">
          <Sidebar />
        </div>
        <div className="lg:hidden lg:basis-3/12">
          {showsidebar && <Sidebar />}
        </div>
        <div className="lg:basis-9/12 justify-center ">
          <div className="justify-center pt-12">
            <img
              className="rounded-full object-scale-down w-48 mx-auto "
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
          </div>
          <div className="flex w-full h-full">
            <div className="basis-1/2">
              <h1 className="text-center text-[25px]">Personal Information</h1>
              <div className="text-center ">
                <h1>Name:Sharaschandrika</h1>
                <h1>Email:ammu@gmail.com</h1>
                <h1>Password:</h1>
              </div>
            </div>
            <div className="basis-1/2">
              <h1 className="text-center text-[25px]">Documents</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
