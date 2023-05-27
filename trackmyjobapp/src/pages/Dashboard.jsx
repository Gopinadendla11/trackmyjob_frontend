import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { cardsData } from "./DashboardData";
import MyBarChart from "../components/MyBarChart";
import MyPieChart from "../components/MyPieChart";
import { Navbar } from "../components/Navbar";
import MenuIcon from "@mui/icons-material/Menu";

const Dashboard = () => {
  const [showsidebar, setsidebar] = React.useState(true);

  const toggleSideNav = () => {
    setsidebar((prev) => !prev);
  };
  return (
    <div className="h-screen w-screen ">
      <button className="h-4 lg:hidden" onClick={toggleSideNav}>
        <MenuIcon></MenuIcon>
      </button>
      <div className="flex">
        <div className="hidden lg:block h-screen lg:basis-3/12">
          <Sidebar />
        </div>
        <div className="lg:hidden lg:basis-3/12">
          {showsidebar && <Sidebar />}
        </div>

        <div className="h-screen lg:basis-9/12 bg-purple-50 overflow-scroll ">
          <p className="px-20 py-12 text-center text-[28px] font-bold">
            Welcome Gopi Krishna !!!
          </p>
          {/* Dashboard Cards */}
          <div className="px-12 flex flex-col lg:flex-row justify-between my:6 lg:my-12">
            {cardsData.map((cardElement) => {
              return (
                <Card className="flex justify-between m-6">
                  <div className="pr-4">
                    <p className="text-[20px] font-bold">
                      {cardElement.number}
                    </p>
                    <p>{cardElement.name}</p>
                  </div>
                  <img className="w-12 h-12" src={cardElement.image}></img>
                </Card>
              );
            })}
          </div>

          {/* Charts */}
          <div className="flex flex-col lg-flex-row w-full  px-12 pt:8 lg:pt-16">
            <Card className="basis-2/3 mr-8 mb-4">
              <p className="font-bold text-[18px]">
                Number of jobs applied everyday
              </p>
              <div className="hidden lg:block">
                <MyBarChart />
              </div>
            </Card>
            <Card className="basis-1/3 mb-4">
              <p className="font-bold">Job Hunt progress</p>
              <MyPieChart />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
