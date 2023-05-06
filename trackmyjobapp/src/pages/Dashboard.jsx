import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { cardsData } from "./DashboardData";
import MyBarChart from "../components/MyBarChart";
import MyPieChart from "../components/MyPieChart";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <div className="h-screen basis-1/6">
        <Sidebar />
      </div>

      <div className="h-screen basis-5/6 bg-purple-50">
        <p className="px-20 py-12 text-[36px] font-bold">
          Welcome Gopi Krishna !!!
        </p>
        {/* Dashboard Cards */}
        <div className="px-24 flex justify-between">
          {cardsData.map((cardElement) => {
            return (
              <Card className="p-6 flex justify-between">
                <div>
                  <p className="text-[28px] font-bold">{cardElement.number}</p>
                  <p>{cardElement.name}</p>
                </div>
                <img className="w-12 h-12" src={cardElement.image}></img>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="flex w-full  px-24 pt-16">
          <Card className="basis-2/3 mr-8">
            <p className="font-bold text-[18px]">
              Number of jobs applied everyday
            </p>
            <MyBarChart />
          </Card>
          <Card className="basis-1/3 ">
            <p className="font-bold">Job Hunt progress</p>
            <MyPieChart />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
