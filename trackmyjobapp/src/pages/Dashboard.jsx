import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ApplicationsImg from "../images/applications.png";
import OnlineAssessmentImg from "../images/binary-code.png";
import InterviewImg from "../images/job-interview.png";
import RejectedImg from "../images/file.png";
import { GetUserData } from "../services/UserDataService";
import MyBarChart from "../components/MyBarChart";
import MyPieChart from "../components/MyPieChart";
import { Navbar } from "../components/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  const [showsidebar, setsidebar] = React.useState(true);

  const toggleSideNav = () => {
    setsidebar((prev) => !prev);
  };
  const [name, setName] = useState("");
  const [n_applied, setApplied] = useState("");
  const [n_assessments, setAssessments] = useState("");
  const [n_interviews, setInterviews] = useState("");
  const [n_rejected, setRejected] = useState("");

  const getData = async () => {
    const response = await GetUserData();
    if (response.status === 200) {
      const user = response.data;
      let updateName =
        user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1);
      setName(updateName);
      setApplied(user.n_applied);
      setAssessments(user.n_assessments);
      setInterviews(user.n_interviews);
      setRejected(user.n_rejected);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
          <div className="basis-2/3 mr-8 rounded-lg p-8 flex-col justify-between bg-white drop-shadow-xl">
            <p className="font-bold text-[18px]">
              Number of jobs applied everyday
            </p>
            <MyBarChart />
          </div>
          <div className="basis-1/3 rounded-lg p-8 flex-col justify-between bg-white drop-shadow-xl">
            <p className="font-bold">Job Hunt progress</p>
            <MyPieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
